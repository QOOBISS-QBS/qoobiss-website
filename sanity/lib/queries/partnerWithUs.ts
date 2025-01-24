import { groq } from "next-sanity";

export const partnerWithUsQuery = groq`
  *[_type == "partnerWithUs"][0] {
    heading,
    description,
    infoSections[] {
      title,
      items[] {
        title,
        office[]
      }
    },
    form {
      formsparkId,
      inputs[] {
        placeholder,
        name,
        type,
        required
      },
      terms {
        title,
        link {
          text,
          url
        }
      },
      submitButton
    },
    images {
      main {
        "src": asset->url,
        alt
      },
      background {
        "src": asset->url,
        alt
      }
    }
  }
`;
