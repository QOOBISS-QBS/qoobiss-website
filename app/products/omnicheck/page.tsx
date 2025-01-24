import { Hero } from "@/components/products/omnicheck/Hero";
import { Banner } from "@/components/products/omnicheck/Banner";
import { OurSolution } from "@/components/products/omnicheck/OurSolution";
import { DarkFeature } from "@/components/products/omnicheck/DarkFeature";
import { LightFeature } from "@/components/products/omnicheck/LightFeature";
import { DarkFeature2 } from "@/components/products/omnicheck/DarkFeature2";
import { GetInTouch } from "@/components/GetInTouch";

export default function Home() {
  return (
    <main>
      <Banner />
      <Hero />
      <LightFeature />
      <div className="lg:bg-[url('/q.png')] bg-left bg-cover bg-no-repeat bg-dark-indigo">
        <OurSolution />
        <DarkFeature />
      </div>
      <DarkFeature2 />
      <GetInTouch />
    </main>
  );
}
