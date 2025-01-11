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
