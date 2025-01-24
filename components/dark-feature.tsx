/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import AnimateHeading, {
  StaggeredHeading,
} from "@/components/helpers/word-curtain";
import Link from "next/link";
import seamlessAnimation from "@/animation-data/seamless.json";
import scalabilityAnimation from "@/animation-data/scalability.json";
import workflowAnimation from "@/animation-data/automation.json";
import universalAnimation from "@/animation-data/universal.json";
import {
  type DarkFeatureData,
  sanitizeDarkFeatureData,
} from "@/types/dark-feature";

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(() => import("./helpers/lottie-animation"), {
  ssr: false,
});

// Hardcoded animations mapping
const SECTION_ANIMATIONS = [
  seamlessAnimation,
  scalabilityAnimation,
  workflowAnimation,
  universalAnimation,
];

export type DarkFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<DarkFeatureData>;

export const DarkFeature = (props: DarkFeatureProps) => {
  // Sanitize the incoming data
  const sanitizedData = sanitizeDarkFeatureData({
    heading: props.heading || DarkFeatureDefaults.heading,
    description: props.description || DarkFeatureDefaults.description,
    button: props.button || DarkFeatureDefaults.button,
    features: props.features || DarkFeatureDefaults.features,
  });

  if (!sanitizedData) {
    console.error("Invalid dark feature data provided");
    return null;
  }

  const { heading, description, button, features } = sanitizedData;

  return (
    <section className="pt-6 pb-20 lg:pt-24 lg:pb-20 bg-dark-background relative">
      <div className="container container-padding">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 lg:grid-cols-[0.35fr_1fr] lg:gap-y-16 lg:gap-x-20">
          <div className="w-full lg:w-[85%]">
            <AnimateHeading className="mb-6 lg:mb-5 lg:text-2xl text-gradient">
              {heading}
            </AnimateHeading>
            <p className="lg:text-lg text-dark-chapeau">{description}</p>
            <div className="mt-12 flex items-center gap-x-4 lg:mt-10 justify-center lg:justify-normal">
              <Link href="/products">
                <Button {...button} className="px-[30px] py-[15px]">
                  {button.title}
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-5 lg:gap-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-[30px] lg:p-16 custom-gradient rounded-2xl h-full flex flex-col"
              >
                <div className="mb-8 relative w-24 h-24">
                  <LottieAnimation
                    animationData={SECTION_ANIMATIONS[index]}
                    width={index === 0 ? "164px" : "96px"}
                    height="96px"
                    loop={false}
                  />
                </div>
                <StaggeredHeading className="mb-6 text-2xl lg:mb-8 lg:text-4xl lg:leading-[1.2] text-dark-foreground">
                  {feature.heading}
                </StaggeredHeading>
                <p className="text-dark-chapeau lg:text-lg leading-[1.3]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const DarkFeatureDefaults: DarkFeatureData = {
  heading: "Adapt your business to the fast moving digital reality.",
  description:
    "Embracing automation and digitalization is no longer optional—it's essential. As technology rapidly advances, businesses must adapt to stay competitive and relevant.",
  button: { title: "Discover new solutions ", variant: "dark-default" },
  features: [
    {
      heading: "Seamless integration",
      description:
        "Quickly integrate with existing systems, ensuring smooth and efficient adoption. Our solutions fit effortlessly into your technology landscape, minimizing disruption and accelerating deployment.",
    },
    {
      heading: "Easy scalability",
      description:
        "Expand your operations to accommodate growing demands without complexity. Our digital tools  support your growth ambitions, accommodating increased volumes and new business opportunities with ease.",
    },
    {
      heading: "Workflow automation",
      description:
        "Streamline various business processes, reducing manual effort and increasing efficiency. Automate tasks from customer onboarding to financial operations, freeing up resources to focus on strategic initiatives",
    },
    {
      heading: "Universal business fit",
      description:
        "Designed to adapt seamlessly across any industry or country, ensuring a perfect fit. Qoobiss solutions are crafted to meet the unique challenges and requirements of your business, regardless of your operational environment.",
    },
  ],
};

DarkFeature.displayName = "DarkFeature";
