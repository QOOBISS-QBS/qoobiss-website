import { Hero } from "@/components/products/ontrace/Hero";
import { Banner } from "@/components/products/ontrace/Banner";
import { OurSolution } from "@/components/products/ontrace/OurSolution";
import { DarkFeature } from "@/components/products/ontrace/DarkFeature";
import { LightFeature } from "@/components/products/ontrace/LightFeature";
import { DarkFeature2 } from "@/components/products/ontrace/DarkFeature2";
import { GetInTouch } from "@/components/GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import {
  ONTRACE_QUERY,
  ONTRACE_FEATURES_QUERY,
} from "@/sanity/lib/queries/ontrace";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const [ontraceData, ontraceFeaturesData, getInTouchData] = await Promise.all([
    sanityFetch({
      query: ONTRACE_QUERY,
    }),
    sanityFetch({
      query: ONTRACE_FEATURES_QUERY,
    }),
    sanityFetch({
      query: GET_IN_TOUCH_QUERY,
    }),
  ]);

  return (
    <main>
      <Banner {...ontraceData.banner} />
      <Hero {...ontraceData.hero} />
      <LightFeature {...ontraceFeaturesData.lightFeature} />
      <div className="lg:bg-[url('/q.png')] bg-left bg-cover bg-no-repeat bg-dark-indigo">
        <OurSolution {...ontraceData.ourSolution} />
        <DarkFeature {...ontraceFeaturesData.darkFeature} />
      </div>
      <DarkFeature2 {...ontraceFeaturesData.darkFeature2} />
      <GetInTouch {...getInTouchData} />
    </main>
  );
}
