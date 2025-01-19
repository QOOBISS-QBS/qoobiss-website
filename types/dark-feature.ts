import { ButtonProps } from "@/components/ui/button";

export interface Feature {
  heading: string;
  description: string;
}

export interface DarkFeatureData {
  heading: string;
  description: string;
  button: ButtonProps;
  features: Feature[];
}

// Type guard
export function isDarkFeatureData(data: unknown): data is DarkFeatureData {
  if (!data || typeof data !== "object") return false;

  const candidate = data as DarkFeatureData;
  return (
    typeof candidate.heading === "string" &&
    typeof candidate.description === "string" &&
    typeof candidate.button === "object" &&
    typeof candidate.button.title === "string" &&
    typeof candidate.button.variant === "string" &&
    Array.isArray(candidate.features) &&
    candidate.features.every(isFeature)
  );
}

export function isFeature(feature: unknown): feature is Feature {
  if (!feature || typeof feature !== "object") return false;

  const candidate = feature as Feature;
  return (
    typeof candidate.heading === "string" &&
    typeof candidate.description === "string"
  );
}

// Sanitizer
export function sanitizeDarkFeatureData(data: unknown): DarkFeatureData | null {
  if (!isDarkFeatureData(data)) return null;

  return {
    heading: data.heading,
    description: data.description,
    button: data.button,
    features: data.features
      .map(sanitizeFeature)
      .filter((feature): feature is Feature => feature !== null),
  };
}

export function sanitizeFeature(feature: unknown): Feature | null {
  if (!isFeature(feature)) return null;

  return {
    heading: feature.heading,
    description: feature.description,
  };
}
