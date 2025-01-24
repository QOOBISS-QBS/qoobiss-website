import { groq } from "next-sanity";

export const ORIGIN_QUERY = groq`
  *[_type == "origin"][0] {
    banner {
      title,
      unColoredHeadingOne,
      coloredHeading,
      unColoredHeadingTwo,
      description,
      button {
        title,
        variant,
        size
      }
    },
    hero {
      title,
      description
    },
    ourSolution {
      heading,
      descriptionFirstPart,
      coloredText,
      descriptionSecondPart
    }
  }
`;

export const ORIGIN_FEATURES_QUERY = groq`
  *[_type == "originFeatures"][0] {
    darkFeature {
      heading,
      description,
      button {
        title,
        variant
      },
      features[] {
        icon {
          src,
          alt
        },
        heading,
        description
      }
    },
    darkFeature2 {
      tagline,
      heading,
      description,
      features[] {
        icon {
          src,
          alt
        },
        heading,
        description
      }
    },
    lightFeature {
      tagline,
      heading,
      description,
      features[] {
        image {
          src,
          alt
        },
        heading,
        description
      }
    }
  }
`;
