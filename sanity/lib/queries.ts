import { defineQuery } from "next-sanity";

export const NAVBAR_QUERY = defineQuery(`*[_type == "navbar"][0]{
  logo{
    asset->{url},
    alt
  },
  navigationItems[]{
    title,
    href,
    links[]{
      title,
      href
    }
  },
  button{
    title,
    href
  }
}`);

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
  coloredHeading,
  heading,
  description
}`);

export const WHY_QOOBISS_QUERY = defineQuery(`*[_type == "whyQoobiss"][0]{
  heading,
  descriptionFirstPart,
  coloredText
}`);

export const DARK_FEATURE_QUERY = defineQuery(`*[_type == "darkFeature"][0]{
  heading,
  description,
  button{
    title,
    variant
  },
  features[]{
    icon,
    heading,
    description
  }
}`);

export const LIGHT_FEATURE_QUERY = defineQuery(`*[_type == "lightFeature"][0]{
  tagline,
  heading,
  description,
  button{
    title,
    variant
  },
  sections[]{
    number,
    icon,
    heading,
    description
  }
}`);
