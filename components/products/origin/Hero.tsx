"use client";

import { StaggeredHeading } from "@/components/helpers/word-curtain";

type Props = {
  title: string;
  description: string;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { title, description } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-[200px]">
      <div className="container container-padding text-center flex flex-col items-center justify-center gap-6 lg:gap-8">
        <StaggeredHeading className="text-light-foreground text-4xl lg:text-11xl lg:font-light z-10 w-full max-w-7xl mx-auto">
          {title}
        </StaggeredHeading>
        <p className="text-light-foreground text-sm lg:text-lg items-center justify-center flex max-w-xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  title:
    "A single platform designed to seamlessly automate and digitalize the entire end-to-end client journey across any industry.",
  description:
    "Whether it's a simple onboarding flow, extensive compliance verification, or a complex loan origination followed by digitally signed agreements and money transfers, Origin let’s you build, customize, and execute these processes in a completely automated way.",
};
