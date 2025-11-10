import { useContent } from '../hooks/useContent';

interface ContentSectionProps {
  sectionKey: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function ContentSection({
  sectionKey,
  fallbackTitle,
  fallbackDescription,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: ContentSectionProps) {
  const { getSection, loading } = useContent();
  const section = getSection(sectionKey);

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  const title = section?.title || fallbackTitle;
  const description = section?.description || fallbackDescription;

  return (
    <div className={className}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
