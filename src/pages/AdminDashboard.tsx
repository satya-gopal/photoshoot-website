import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

interface Section {
  id: number;
  page: string;
  sectionKey: string;
  title: string | null;
  description: string | null;
  content: string | null;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Image {
  id: number;
  sectionId: number | null;
  imageKey: string;
  imagePath: string;
  altText: string | null;
  order: number | null;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export default function AdminDashboard() {
  const [sections, setSections] = useState<Section[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchSections();
    fetchImages();
  }, []);

  const checkAuth = async () => {
    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/auth/check`, {
        credentials: 'include',
      });
      const data = await response.json();
      
      if (!data.authenticated) {
        navigate('/admin/login');
      }
    } catch (err) {
      navigate('/admin/login');
    }
  };

  const fetchSections = async () => {
    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/sections`);
      const data = await response.json();
      setSections(data);
    } catch (err) {
      console.error('Failed to fetch sections:', err);
    }
  };

  const fetchImages = async () => {
    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/images`);
      const data = await response.json();
      setImages(data);
    } catch (err) {
      console.error('Failed to fetch images:', err);
    }
  };

  const handleLogout = async () => {
    try {
      const API_URL = 'http://localhost:3001';
      await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const handleUpdateSection = async (section: Section) => {
    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/sections/${section.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(section),
      });

      if (response.ok) {
        fetchSections();
        setEditingSection(null);
        alert('Section updated successfully!');
      }
    } catch (err) {
      console.error('Failed to update section:', err);
      alert('Failed to update section');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    formData.append('imageKey', `uploaded_${Date.now()}`);
    formData.append('altText', '');

    setUploadingImage(true);

    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/images/upload`, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      if (response.ok) {
        fetchImages();
        alert('Image uploaded successfully!');
      }
    } catch (err) {
      console.error('Failed to upload image:', err);
      alert('Failed to upload image');
    } finally {
      setUploadingImage(false);
    }
  };

  const handlePublishImage = async (image: Image) => {
    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/images/${image.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          ...image,
          isPublished: !image.isPublished,
        }),
      });

      if (response.ok) {
        fetchImages();
      }
    } catch (err) {
      console.error('Failed to update image:', err);
    }
  };

  const handleDeleteImage = async (imageId: number) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const API_URL = 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/images/${imageId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        fetchImages();
        alert('Image deleted successfully!');
      }
    } catch (err) {
      console.error('Failed to delete image:', err);
      alert('Failed to delete image');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button
              onClick={() => setPreview(!preview)}
              variant="outline"
            >
              {preview ? 'Hide Preview' : 'Show Preview'}
            </Button>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Content Sections</h2>
              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="border-b pb-4">
                    {editingSection?.id === section.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editingSection.title || ''}
                          onChange={(e) =>
                            setEditingSection({
                              ...editingSection,
                              title: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                          placeholder="Title"
                        />
                        <textarea
                          value={editingSection.description || ''}
                          onChange={(e) =>
                            setEditingSection({
                              ...editingSection,
                              description: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                          placeholder="Description"
                          rows={3}
                        />
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={editingSection.isPublished}
                            onChange={(e) =>
                              setEditingSection({
                                ...editingSection,
                                isPublished: e.target.checked,
                              })
                            }
                          />
                          <label>Published</label>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleUpdateSection(editingSection)}
                            size="sm"
                          >
                            Save
                          </Button>
                          <Button
                            onClick={() => setEditingSection(null)}
                            variant="outline"
                            size="sm"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{section.title}</h3>
                            <p className="text-sm text-gray-600">
                              {section.description}
                            </p>
                            <p className="text-xs text-gray-400">
                              {section.page} - {section.sectionKey}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <span
                              className={`px-2 py-1 text-xs rounded ${
                                section.isPublished
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {section.isPublished ? 'Published' : 'Draft'}
                            </span>
                            <Button
                              onClick={() => setEditingSection(section)}
                              size="sm"
                              variant="outline"
                            >
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
              
              <div className="mb-4">
                <label className="block">
                  <span className="sr-only">Choose image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="border rounded p-2">
                    <img
                      src={`http://localhost:3001${image.imagePath}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.png';
                      }}
                      alt={image.altText || ''}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <p className="text-xs text-gray-600 mb-2">{image.imageKey}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handlePublishImage(image)}
                        size="sm"
                        variant={image.isPublished ? 'outline' : 'default'}
                      >
                        {image.isPublished ? 'Unpublish' : 'Publish'}
                      </Button>
                      <Button
                        onClick={() => handleDeleteImage(image.id)}
                        size="sm"
                        variant="outline"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {preview && (
          <div className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Preview (Published Content Only)</h2>
              <div className="space-y-4">
                {sections
                  .filter((s) => s.isPublished)
                  .map((section) => (
                    <div key={section.id} className="border-b pb-4">
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                      <p className="text-gray-600">{section.description}</p>
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
