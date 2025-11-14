import { useState, useEffect } from 'react';
import { formatText } from '../screens/Desktop/BabyShoot';

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

interface PackageItem {
  id: number;
  discount: string;
  title: string;
  badge: string | null;
  isPublished: boolean;
}

interface ReviewItem {
  id: number;
  name: string;
  text: string;
  rating: number;
  source: string | null;       // e.g. Google, Facebook
  timeAgo: string;             // "1 year ago"
  isPublished: boolean;
}

export function useContent() {
  const [sections, setSections] = useState<Section[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const [packages, setPackages] = useState<PackageItem[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:3001';

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const [sectionsRes, imagesRes, packagesRes, reviewsRes] = await Promise.all([
        fetch(`${API_URL}/api/sections?published=true`),
        fetch(`${API_URL}/api/images?published=true`),
        fetch(`${API_URL}/api/packages?published=true`),
        fetch(`${API_URL}/api/reviews?published=true`),
      ]);

      const sectionsData = await sectionsRes.json();
      const imagesData = await imagesRes.json();
      const packagesData = await packagesRes.json();
      const reviewsData = await reviewsRes.json();

      // Convert admin "/n" text line breaks

      const formattedPackages = packagesData.map((p: any) => ({
        ...p,
        title: formatText(p.title)
      }));

      const formattedReviews = reviewsData.map((r: any) => ({
        ...r,
        text: formatText(r.text)
      }));

      setSections(sectionsData);
      setImages(imagesData);
      setPackages(formattedPackages);
      setReviews(formattedReviews);

    } catch (error) {
      console.error("Failed to fetch content:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSection = (key: string) => sections.find(s => s.sectionKey === key);
  const getImage = (key: string) => images.find(i => i.imageKey === key);
  const getPackages = () => packages;
  const getReviews = () => reviews;

  return {
    sections,
    images,
    packages,
    reviews,
    loading,
    getSection,
    getImage,
    getPackages,
    getReviews
  };
}
