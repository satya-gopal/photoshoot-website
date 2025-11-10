import { useState, useEffect } from 'react';

interface Section {
  id: number;
  page: string;
  sectionKey: string;
  title: string | null;
  description: string | null;
  content: string | null;
  isPublished: boolean;
}

interface Image {
  id: number;
  sectionId: number | null;
  imageKey: string;
  imagePath: string;
  altText: string | null;
  order: number | null;
  isPublished: boolean;
}

export function useContent() {
  const [sections, setSections] = useState<Section[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const API_URL = 'http://localhost:3001';
      const [sectionsRes, imagesRes] = await Promise.all([
        fetch(`${API_URL}/api/sections?published=true`),
        fetch(`${API_URL}/api/images?published=true`),
      ]);

      const sectionsData = await sectionsRes.json();
      const imagesData = await imagesRes.json();

      setSections(sectionsData);
      setImages(imagesData);
    } catch (error) {
      console.error('Failed to fetch content:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSection = (sectionKey: string) => {
    return sections.find((s) => s.sectionKey === sectionKey);
  };

  const getImage = (imageKey: string) => {
    return images.find((img) => img.imageKey === imageKey);
  };

  return { sections, images, loading, getSection, getImage };
}
