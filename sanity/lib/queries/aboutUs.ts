export const ABOUT_US_QUERY = `
  *[_type == "aboutUs"][0] {
    tagline,
    title,
    image {
      asset->{
        url
      },
      alt
    },
    button {
      title,
      variant,
      size
    },
    stats[] {
      value,
      label,
      description
    }
  }
`;
