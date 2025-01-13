// app/page.tsx
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import { sanityFetch } from "@/sanity/lib/client";
import {
  DARK_FEATURE_QUERY,
  HEADER_QUERY,
  LIGHT_FEATURE_QUERY,
  NAVBAR_QUERY,
  WHY_QOOBISS_QUERY,
} from "@/sanity/lib/queries";
import { WhyQoobiss } from "@/components/why-qoobiss";
import { DarkFeature } from "@/components/dark-feature";
import { LightFeature } from "@/components/light-feature";

export default async function Home() {
  const [
    navbarData,
    headerData,
    whyQoobissData,
    darkFeatureData,
    lightFeatureData,
  ] = await Promise.all([
    sanityFetch({
      query: NAVBAR_QUERY,
    }),
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
  ]);

  return (
    <main>
      <Navbar {...navbarData} />
      <Header {...headerData} />
      <WhyQoobiss {...whyQoobissData} />
      <DarkFeature {...darkFeatureData} />
      <LightFeature {...lightFeatureData} />
    </main>
  );
}
