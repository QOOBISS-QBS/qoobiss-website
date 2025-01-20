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

export const FAQ_QUERY = defineQuery(`*[_type == "faq"][0]{
  tagline,
  heading,
  button{
    title,
    variant
  },
  buttonMobile{
    title,
    variant
  },
  questions[]{
    title,
    answer
  }
}`);

export const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]{
  contents[]{
    title,
    links[]{
      url,
      subTitle
    }
  },
  officeAddress,
  contactInfo{
    email
  },
  socialLinks[]{
    platform,
    url
  },
  logo{
    asset->{url},
    alt
  },
  mainHeadingText,
  copyrightText,
  termsUrl{
    url,
    title
  },
  privacyUrl{
    url,
    title
  },
  cookiesUrl{
    url,
    title
  }
}`);
