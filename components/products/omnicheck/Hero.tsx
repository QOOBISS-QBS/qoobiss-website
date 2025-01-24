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
        <div className="text-light-foreground text-sm lg:text-lg items-center justify-center flex max-w-xl">
          {description}
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  title: "Automated Compliance Command Center",
  description:
    "Omnicheck is designed to facilitate seamless automation of AML compliance across any industry. Whether conducting basic due diligence or complex investigation, Omnicheck provides thorough, continuous monitoring and verification of your business clients & partners, safeguarding your operations.",
};
