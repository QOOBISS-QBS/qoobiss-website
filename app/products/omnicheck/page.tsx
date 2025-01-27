import { Hero } from "@/components/products/omnicheck/Hero";
import { Banner } from "@/components/products/omnicheck/Banner";
import { OurSolution } from "@/components/products/omnicheck/OurSolution";
import { DarkFeature } from "@/components/products/omnicheck/DarkFeature";
import { LightFeature } from "@/components/products/omnicheck/LightFeature";
import { DarkFeature2 } from "@/components/products/omnicheck/DarkFeature2";
import { GetInTouch } from "@/components/GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import {
  OMNICHECK_QUERY,
  OMNICHECK_FEATURES_QUERY,
} from "@/sanity/lib/queries/omnicheck";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const [omnicheckData, omnicheckFeaturesData, getInTouchData] =
    await Promise.all([
      sanityFetch({
        query: OMNICHECK_QUERY,
      }),
      sanityFetch({
        query: OMNICHECK_FEATURES_QUERY,
      }),
      sanityFetch({
        query: GET_IN_TOUCH_QUERY,
      }),
    ]);

  return (
    <main>
      <Banner {...omnicheckData.banner} />
      <Hero {...omnicheckData.hero} />
      <LightFeature {...omnicheckFeaturesData.lightFeature} />
      <div className="lg:bg-[url('/q.png')] bg-left bg-cover bg-no-repeat bg-dark-indigo">
        <OurSolution {...omnicheckData.ourSolution} />
        <DarkFeature {...omnicheckFeaturesData.darkFeature} />
      </div>
      <DarkFeature2 {...omnicheckFeaturesData.darkFeature2} />
      <GetInTouch {...getInTouchData} />
    </main>
  );
}
