import { Hero } from "@/components/products/ontrace/Hero";
import { Banner } from "@/components/products/ontrace/Banner";
import { OurSolution } from "@/components/products/ontrace/OurSolution";
import { DarkFeature } from "@/components/products/ontrace/DarkFeature";
import { LightFeature } from "@/components/products/ontrace/LightFeature";
import { DarkFeature2 } from "@/components/products/ontrace/DarkFeature2";
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
