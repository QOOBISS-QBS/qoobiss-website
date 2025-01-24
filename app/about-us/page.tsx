import { FeatureOne } from "@/components/about-us/FeatureOne";
import { FeatureTwo } from "@/components/about-us/FeatureTwo";
import { Hero } from "@/components/about-us/Hero";
import { Team } from "@/components/about-us/Team";
import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Banner title="About us" />
      <Hero />
      <FeatureOne />
      <FeatureTwo />
      <Team />
      <GetInTouch />
    </main>
  );
}
