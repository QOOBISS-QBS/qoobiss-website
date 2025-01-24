/* eslint-disable @next/next/no-img-element */
"use client";

import { StaggeredHeading } from "@/components/helpers/word-curtain";

type Feature = {
  number: string;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
};

export type FeatureTwoProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeatureTwo = (props: FeatureTwoProps) => {
  const { tagline, heading, description, features } = {
    ...FeatureTwoDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <StaggeredHeading className="font-semibold uppercase text-xl text-electric-violet">
            {tagline}
          </StaggeredHeading>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-between lg:gap-40">
            <StaggeredHeading className="text-light-foreground text-4xl lg:font-light lg:text-8xl">
              {heading}
            </StaggeredHeading>
            <p className="text-light-chapeau lg:text-lg">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 justify-center gap-5">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ ...feature }: Feature) => {
  return (
    <div className="p-[30px] lg:p-14 bg-white/40 flex flex-col gap-4 rounded-2xl lg:h-[500px]">
      <StaggeredHeading className="text-4xl text-electric-violet">
        {feature.number}
      </StaggeredHeading>
      <StaggeredHeading className="text-2xl lg:text-4xl pt-8 text-light-foreground ">
        {feature.heading}
      </StaggeredHeading>
      <p className="lg:text-lg text-light-chapeau">{feature.description}</p>
    </div>
  );
};

export const FeatureTwoDefaults: FeatureTwoProps = {
  tagline: "OUR CORE VALUES",
  heading: "Empowering Innovation and Excellence",
  description:
    "At Qoobiss, we’re dedicated to transforming challenges into opportunities and innovation. We empower our clients with advanced tools to lead their industries, providing the flexibility to adapt and thrive in a fast-changing world. By simplifying the complex, we make life easier, enabling our clients to focus on what they do best. Join us in redefining what’s possible and achieving new heights together.",
  features: [
    {
      number: "01",
      heading: "Turning Challenges into Innovation",
      description:
        "At Qoobiss, we thrive on challenges because they inspire us to go beyond the ordinary. Our commitment to tackling complex problems fuels our innovation, ensuring we deliver extraordinary solutions that set new benchmarks in the industry.",
    },
    {
      number: "02",
      heading: "Empowering Clients to Lead",
      description:
        "We design tools that empower our clients to outpace their competition. By providing cutting-edge technology and groundbreaking solutions, Qoobiss helps clients not just participate in their markets, but lead them.",
    },
    {
      number: "03",
      heading: "Maximizing Flexibility for Success",
      description:
        "Our approach to creating rules is designed to provide maximum flexibility, adapting to ever-changing business landscapes. This flexibility allows our clients to innovate and evolve without constraints, fostering an environment where they can thrive.",
    },
    {
      number: "04",
      heading: "Making Life Easier Through Innovation",
      description:
        "At Qoobiss, we dive deep into the complex in order to simplify it for everyone. By exploring difficult problems, we make life easier and more manageable for our clients, enhancing their operational efficiency and overall satisfaction.",
    },
  ],
};
