import { groq } from "next-sanity";

export const securityAndComplianceQuery = groq`
  *[_type == "securityAndCompliance"][0] {
    heading,
    certifications[] {
      title,
      "isoImage": {
        "src": isoImage.asset->url,
        "alt": isoImage.alt
      },
      shortDescription,
      badge,
      fullDescription,
      validUntil
    }
  }
`;
