"use client";

import AnimateHeading, { StaggeredHeading } from "@/components/ui/word-curtain";

type Props = {
  heading: string;
  descriptionFirstPart: string;
  coloredText: string;
  descriptionSecondPart: string;
};

export type OurSolutionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const OurSolution = (props: OurSolutionProps) => {
  const { heading, descriptionFirstPart, coloredText, descriptionSecondPart } =
    {
      ...OurSolutionDefaults,
      ...props,
    } as Props;
  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] lg:justify-between items-start w-full gap-y-6">
          <StaggeredHeading className="text-electric-violet text-xl font-semibold uppercase">
            {heading}
          </StaggeredHeading>
          <span className="text-4xl lg:text-11xl font-light justify-self-end">
            {descriptionFirstPart && (
              <AnimateHeading className="text-gradient">
                {descriptionFirstPart}
              </AnimateHeading>
            )}{" "}
            {coloredText && (
              <AnimateHeading className="text-accent">
                {coloredText}
              </AnimateHeading>
            )}{" "}
            {descriptionSecondPart && (
              <AnimateHeading className="text-gradient">
                {descriptionSecondPart}
              </AnimateHeading>
            )}{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export const OurSolutionDefaults: OurSolutionProps = {
  heading: "IN A GLANCE",
  descriptionFirstPart: "Experience seamless end-to-end",
  coloredText: "automation",
  descriptionSecondPart: "",
};

OurSolution.displayName = "OurSolution";
