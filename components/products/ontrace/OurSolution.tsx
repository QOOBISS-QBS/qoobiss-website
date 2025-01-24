"use client";

import AnimateHeading from "@/components/helpers/word-curtain";

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
          <AnimateHeading className="text-electric-violet text-xl font-semibold uppercase">
            {heading}
          </AnimateHeading>
          <AnimateHeading className="text-4xl lg:text-11xl font-light justify-self-end">
            <span className="text-gradient">{descriptionFirstPart}</span>{" "}
            <span className="text-accent">{coloredText}</span>{" "}
            <span className="text-gradient">{descriptionSecondPart}</span>
          </AnimateHeading>
        </div>
      </div>
    </section>
  );
};

export const OurSolutionDefaults: OurSolutionProps = {
  heading: "Innovative tech",
  descriptionFirstPart: "Unlock",
  coloredText: "Full Automation",
  descriptionSecondPart: "and efficient identification",
};

OurSolution.displayName = "OurSolution";
