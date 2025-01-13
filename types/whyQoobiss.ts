// types/whyQoobiss.ts

export interface WhyQoobissData {
  heading: string;
  descriptionFirstPart: string;
  coloredText: string;
}

// Type guard
export function isWhyQoobissData(data: unknown): data is WhyQoobissData {
  if (!data || typeof data !== "object") return false;

  const candidate = data as WhyQoobissData;
  return (
    typeof candidate.heading === "string" &&
    typeof candidate.descriptionFirstPart === "string" &&
    typeof candidate.coloredText === "string" &&
    candidate.heading.length > 0 &&
    candidate.descriptionFirstPart.length > 0 &&
    candidate.coloredText.length > 0
  );
}

// Sanitizer
export function sanitizeWhyQoobissData(data: unknown): WhyQoobissData | null {
  if (!isWhyQoobissData(data)) return null;

  return {
    heading: data.heading,
    descriptionFirstPart: data.descriptionFirstPart,
    coloredText: data.coloredText,
  };
}
