/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import AnimateHeading, { StaggeredHeading } from "./ui/word-curtain";
import Link from "next/link";
import madeAnimation from "@/animation-data/made.json";
import instantAnimation from "@/animation-data/instant.json";
import enhancedAnimation from "@/animation-data/enhanced.json";
import performanceAnimation from "@/animation-data/performance.json";
import {
  type LightFeatureData,
  sanitizeLightFeatureData,
} from "@/types/light-feature";

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(() => import("./lottie-animation"), {
  ssr: false,
});

// Hardcoded animations mapping
const SECTION_ANIMATIONS = [
  madeAnimation,
  instantAnimation,
  enhancedAnimation,
  performanceAnimation,
];

export type LightFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<LightFeatureData>;

export const LightFeature = (props: LightFeatureProps) => {
  // Sanitize the incoming data
  const sanitizedData = sanitizeLightFeatureData({
    tagline: props.tagline || LightFeatureDefaults.tagline,
    heading: props.heading || LightFeatureDefaults.heading,
    description: props.description || LightFeatureDefaults.description,
    button: props.button || LightFeatureDefaults.button,
    sections: props.sections || LightFeatureDefaults.sections,
  });

  if (!sanitizedData) {
    console.error("Invalid light feature data provided");
    return null;
  }

  const { tagline, heading, description, button, sections } = sanitizedData;

  return (
    <section className="pt-20 lg:pt-40 relative">
      <div className="container container-padding">
        <div className="flex flex-col items-start lg:gap-20">
          <div>
            <p className="font-semibold mb-6 uppercase text-xl leading-[1.3] text-electric-violet">
              {tagline}
            </p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-between lg:gap-40">
              <StaggeredHeading className="text-4xl lg:font-light lg:text-11xl text-light-foreground">
                {heading}
              </StaggeredHeading>
              <div>
                <p className="text-light-chapeau lg:text-lg">{description}</p>
                <div className="py-12 flex lg:justify-normal justify-center items-center gap-4 lg:mt-[30px]">
                  <Link href="/partner-with-us">
                    <Button {...button} className="px-[30px] py-[15px]">
                      {button.title}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-5 z-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col p-[30px] lg:p-14 h-full bg-white/40 rounded-2xl"
              >
                <div className="flex w-full items-center justify-between">
                  <div
                    className={`${
                      index === 0 ? "-ml-8 mb-8" : "mb-8"
                    } relative size-24`}
                  >
                    <LottieAnimation
                      animationData={SECTION_ANIMATIONS[index]}
                      width={index === 0 ? "164px" : "96px"}
                      height="96px"
                      loop={false}
                    />
                  </div>
                  <StaggeredHeading className="text-electric-violet leading-[1.2] text-2xl lg:text-4xl -mt-8 lg:-mt-12">
                    {section.number}
                  </StaggeredHeading>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  <StaggeredHeading className="text-2xl lg:text-4xl text-light-foreground mb-6">
                    {section.heading}
                  </StaggeredHeading>
                  <AnimateHeading className="text-light-chapeau lg:text-lg leading-[1.3]">
                    {section.description}
                  </AnimateHeading>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const LightFeatureDefaults: LightFeatureData = {
  tagline: "INNOVATION IS KEY",
  heading: "Unlock New Business Growth Opportunities",
  description:
    "Embrace the transformative potential of digitalization to enhance efficiency and streamline interactions across your business landscape. By automating critical workflows and routine operations, you significantly grow performance and improve operational speed. An efficient framework allows you to adapt quickly to market changes and seize new opportunities, solidifying your competitive advantage in the dynamic digital era.",
  button: { title: "Let's talk", variant: "light-default" },
  sections: [
    {
      number: "01",
      heading: "Made for digital age",
      description:
        "Meet your customers where they search for you—in the digital environment. Enable your business to seamlessly connect with customers online, ensuring you are present at every crucial touchpoint of their journey.",
    },
    {
      number: "02",
      heading: "Instant Execution",
      description:
        "Accelerate the launch of new products and modify workflows with exceptional rapidity. Our digital tools enable your business to create swift and agile flows, allowing you to adapt quickly to market demands without delay.",
    },
    {
      number: "03",
      heading: "Enhanced Competitiveness",
      description:
        "Secure a strategic advantage with our flexible digital tools that keep your business agile and proactive in responding to market shifts. Experience enhanced competitiveness as you efficiently tackle new challenges and opportunities.",
    },
    {
      number: "04",
      heading: "Performance Growth",
      description:
        "Reduce operational and capital costs by automating routine processes. Qoobiss solutions not only enhance efficiency but also help you achieve new business objectives faster, contributing to significant performance improvements.",
    },
  ],
};

LightFeature.displayName = "LightFeature";
