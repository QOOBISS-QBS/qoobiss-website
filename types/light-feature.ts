// types/light-feature.ts

import { ButtonProps } from "@/components/ui/button";

export interface Section {
  number: string;
  heading: string;
  description: string;
}

export interface LightFeatureData {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  sections: Section[];
}

// Type guards
export function isSection(section: unknown): section is Section {
  if (!section || typeof section !== "object") return false;

  const candidate = section as Section;
  return (
    typeof candidate.number === "string" &&
    typeof candidate.heading === "string" &&
    typeof candidate.description === "string"
  );
}

export function isLightFeatureData(data: unknown): data is LightFeatureData {
  if (!data || typeof data !== "object") return false;

  const candidate = data as LightFeatureData;
  return (
    typeof candidate.tagline === "string" &&
    typeof candidate.heading === "string" &&
    typeof candidate.description === "string" &&
    typeof candidate.button === "object" &&
    typeof candidate.button.title === "string" &&
    typeof candidate.button.variant === "string" &&
    Array.isArray(candidate.sections) &&
    candidate.sections.every(isSection)
  );
}

// Sanitizers
export function sanitizeSection(section: unknown): Section | null {
  if (!isSection(section)) return null;

  return {
    number: section.number,
    heading: section.heading,
    description: section.description,
  };
}

export function sanitizeLightFeatureData(
  data: unknown
): LightFeatureData | null {
  if (!isLightFeatureData(data)) return null;

  return {
    tagline: data.tagline,
    heading: data.heading,
    description: data.description,
    button: {
      title: data.button.title,
      variant: data.button.variant,
    },
    sections: data.sections
      .map(sanitizeSection)
      .filter((section): section is Section => section !== null),
  };
}
