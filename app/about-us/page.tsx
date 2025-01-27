import { FeatureOne } from "@/components/about-us/FeatureOne";
import { FeatureTwo } from "@/components/about-us/FeatureTwo";
import { Hero } from "@/components/about-us/Hero";
import { Team } from "@/components/about-us/Team";
import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const [getInTouchData] = await Promise.all([
    sanityFetch({
      query: GET_IN_TOUCH_QUERY,
    }),
  ]);

  return (
    <main>
      <Banner title="About us" />
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <Team />
      <GetInTouch {...getInTouchData} />
    </main>
  );
}
