import { FeatureOne } from "@/components/about-us/FeatureOne";
import { FeatureTwo } from "@/components/about-us/FeatureTwo";
import { Hero } from "@/components/about-us/Hero";
import { Team } from "@/components/about-us/Team";
import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";
import {
  ABOUT_US_HERO_QUERY,
  ABOUT_US_TEAM_QUERY,
  ABOUT_US_FEATURE_ONE_QUERY,
  ABOUT_US_FEATURE_TWO_QUERY,
} from "@/sanity/lib/queries/about-us";

export default async function Home() {
  const [getInTouchData, heroData, teamData, featureOneData, featureTwoData] =
    await Promise.all([
      sanityFetch({
        query: GET_IN_TOUCH_QUERY,
      }),
      sanityFetch({
        query: ABOUT_US_HERO_QUERY,
      }),
      sanityFetch({
        query: ABOUT_US_TEAM_QUERY,
      }),
      sanityFetch({
        query: ABOUT_US_FEATURE_ONE_QUERY,
      }),
      sanityFetch({
        query: ABOUT_US_FEATURE_TWO_QUERY,
      }),
    ]);

  return (
    <main>
      <Banner title="About us" />
      <Hero {...heroData} />
      <FeatureOne {...featureOneData} />
      <FeatureTwo {...featureTwoData} />
      <Team {...teamData} />
      <GetInTouch {...getInTouchData} />
    </main>
  );
}
