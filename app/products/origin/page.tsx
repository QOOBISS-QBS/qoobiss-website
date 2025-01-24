import { Hero } from "@/components/products/origin/Hero";
import { Banner } from "@/components/products/origin/Banner";
import { OurSolution } from "@/components/products/origin/OurSolution";
import { DarkFeature } from "@/components/products/origin/DarkFeature";
import { LightFeature } from "@/components/products/origin/LightFeature";
import { DarkFeature2 } from "@/components/products/origin/DarkFeature2";
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
