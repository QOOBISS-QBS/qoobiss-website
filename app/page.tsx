// app/page.tsx
import { Header } from "@/components/header";
import { sanityFetch } from "@/sanity/lib/client";
import {
  DARK_FEATURE_QUERY,
  HEADER_QUERY,
  LIGHT_FEATURE_QUERY,
  WHY_QOOBISS_QUERY,
  FAQ_QUERY,
} from "@/sanity/lib/queries";
import { WhyQoobiss } from "@/components/why-qoobiss";
import { DarkFeature } from "@/components/dark-feature";
import { LightFeature } from "@/components/light-feature";
import { Faq } from "@/components/faq";

import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";
import { GetInTouch } from "@/components/GetInTouch";

export default async function Home() {
  const [
    headerData,
    whyQoobissData,
    darkFeatureData,
    lightFeatureData,
    faqData,
    getInTouchData,
  ] = await Promise.all([
    sanityFetch({
      query: HEADER_QUERY,
    }),
    sanityFetch({
      query: WHY_QOOBISS_QUERY,
    }),
    sanityFetch({
      query: DARK_FEATURE_QUERY,
    }),
    sanityFetch({
      query: LIGHT_FEATURE_QUERY,
    }),
    sanityFetch({
      query: FAQ_QUERY,
    }),
    sanityFetch({
      query: GET_IN_TOUCH_QUERY,
    }),
  ]);

  return (
    <>
      <Header {...headerData} />
      <WhyQoobiss {...whyQoobissData} />
      <DarkFeature {...darkFeatureData} />
      <LightFeature {...lightFeatureData} />
      <Faq {...faqData} />
      <GetInTouch {...getInTouchData} />
    </>
  );
}
