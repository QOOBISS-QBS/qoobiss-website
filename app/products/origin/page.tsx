import { Hero } from "@/components/products/origin/Hero";
import { Banner } from "@/components/products/origin/Banner";
import { OurSolution } from "@/components/products/origin/OurSolution";
import { DarkFeature } from "@/components/products/origin/DarkFeature";
import { LightFeature } from "@/components/products/origin/LightFeature";
import { DarkFeature2 } from "@/components/products/origin/DarkFeature2";
// import { GetInTouch } from "@/components/GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import {
  ORIGIN_QUERY,
  ORIGIN_FEATURES_QUERY,
} from "@/sanity/lib/queries/origin";

export default async function Home() {
  const [originData, originFeaturesData] = await Promise.all([
    sanityFetch({
      query: ORIGIN_QUERY,
    }),
    sanityFetch({
      query: ORIGIN_FEATURES_QUERY,
    }),
  ]);

  return (
    <main>
      <Banner {...originData.banner} />
      <Hero {...originData.hero} />
      <LightFeature {...originFeaturesData.lightFeature} />
      <div className="lg:bg-[url('/q.png')] bg-left bg-cover bg-no-repeat bg-dark-indigo">
        <OurSolution {...originData.ourSolution} />
        <DarkFeature {...originFeaturesData.darkFeature} />
      </div>
      <DarkFeature2 {...originFeaturesData.darkFeature2} />
      {/* <GetInTouch /> */}
    </main>
  );
}
