"use client";

import AnimateHeading, { StaggeredHeading } from "./ui/word-curtain";
import { WhyQoobissData, sanitizeWhyQoobissData } from "@/types/whyQoobiss";

export type WhyQoobissProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<WhyQoobissData>;

export const WhyQoobiss = (props: WhyQoobissProps) => {
  // Sanitize the incoming data
  const sanitizedData = sanitizeWhyQoobissData({
    heading: props.heading || WhyQoobissDefaults.heading,
    descriptionFirstPart:
      props.descriptionFirstPart || WhyQoobissDefaults.descriptionFirstPart,
    coloredText: props.coloredText || WhyQoobissDefaults.coloredText,
  });

  if (!sanitizedData) {
    console.error("Invalid WhyQoobiss data provided");
    return null;
  }

  const { heading, descriptionFirstPart, coloredText } = sanitizedData;

  return (
    <section className="lg:pt-40 bg-dark-background" id="next-section">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_1fr] justify-between items-start w-full gap-x-20 gap-y-6">
          <StaggeredHeading className="text-electric-violet text-xl leading-[1.3] font-semibold uppercase">
            {heading}
          </StaggeredHeading>
          <AnimateHeading className="text-4xl leading-[1.2] lg:text-11xl font-light lg:justify-self-end">
            <span className="text-gradient">{descriptionFirstPart}</span>{" "}
            <span className="text-accent">{coloredText}</span>{" "}
          </AnimateHeading>
        </div>
      </div>
    </section>
  );
};

export const WhyQoobissDefaults: WhyQoobissData = {
  heading: "Why Qoobiss",
  descriptionFirstPart: "Grow the power of",
  coloredText: "automation",
};
