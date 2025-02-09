import { defineQuery } from "next-sanity";

export const ABOUT_US_HERO_QUERY = defineQuery(`*[_type == "aboutUsHero"][0]{
  heading,
  description
}`);

export const ABOUT_US_TEAM_QUERY = defineQuery(`*[_type == "aboutUsTeam"][0]{
  tagline,
  heading,
  teamMembers[]{
    image{
      asset->{
        url
      }
    },
    name,
    jobTitle
  }
}`);

export const ABOUT_US_FEATURE_ONE_QUERY =
  defineQuery(`*[_type == "aboutUsFeatureOne"][0]{
  tagline,
  heading,
  description,
  image{
    asset->{
      url
    },
    alt
  },
  imageMobile{
    asset->{
      url
    },
    alt
  }
}`);

export const ABOUT_US_FEATURE_TWO_QUERY =
  defineQuery(`*[_type == "aboutUsFeatureTwo"][0]{
  tagline,
  heading,
  description,
  features[]{
    number,
    heading,
    description
  }
}`);
