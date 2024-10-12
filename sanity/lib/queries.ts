import { defineQuery } from "next-sanity";

export const NAVBAR_QUERY = defineQuery(`*[_type == "navbar"][0]{
  logo{
    asset->{url},
    alt
  },
  navLinks[]{
    title,
    url
  },
  button{
    title,
    url,
    variant,
    size
  }
}`);

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
  headingFirstPart,
  coloredHeading,
  headingLastPart,
  description
}`);
