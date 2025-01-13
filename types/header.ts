// types/header.ts

export interface HeaderData {
  coloredHeading: string;
  heading: string;
  description: string;
}

// Type guard
export function isHeaderData(data: unknown): data is HeaderData {
  if (!data || typeof data !== "object") return false;

  const candidate = data as HeaderData;
  return (
    typeof candidate.coloredHeading === "string" &&
    typeof candidate.heading === "string" &&
    typeof candidate.description === "string" &&
    candidate.coloredHeading.length > 0 &&
    candidate.heading.length > 0 &&
    candidate.description.length > 0
  );
}

// Sanitizer
export function sanitizeHeaderData(data: unknown): HeaderData | null {
  if (!isHeaderData(data)) return null;

  return {
    coloredHeading: data.coloredHeading,
    heading: data.heading,
    description: data.description,
  };
}
