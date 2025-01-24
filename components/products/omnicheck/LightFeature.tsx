/* eslint-disable @next/next/no-img-element */
"use client";

import AnimateHeading, {
  StaggeredHeading,
} from "@/components/helpers/word-curtain";

type Image = {
  src: string;
  alt?: string;
};

type Feature = {
  image: Image;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: Feature[];
};

export type LightFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LightFeature = (props: LightFeatureProps) => {
  const { tagline, heading, description, features } = {
    ...LightFeatureDefaults,
    ...props,
  } as Props;

  return (
    <section className="py-20 lg:py-40 relative">
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

        <div className="grid grid-cols-1 items-stretch lg:grid-cols-3 gap-5 z-10">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none size-full lg:block hidden">
        <img
          src="/client-needs-ellipse.png"
          alt="Client needs ellipse"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

const Feature = ({ ...feature }: Feature) => {
  return (
    <div className="p-[30px] lg:p-14 bg-white/40 rounded-2xl flex flex-col h-full">
      <div className="flex flex-col h-full mb-8">
        <div className="flex-shrink-0 mb-8">
          <img
            src={feature.image.src}
            alt={feature.image.alt}
            className="size-24"
          />
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <StaggeredHeading className="text-2xl lg:text-4xl text-light-foreground ">
            {feature.heading}
          </StaggeredHeading>
          <AnimateHeading className="lg:text-lg text-light-chapeau mt-4">
            {feature.description}
          </AnimateHeading>
        </div>
      </div>
    </div>
  );
};

export const LightFeatureDefaults: LightFeatureProps = {
  tagline: "YOUR COMPLIANCE PARTNER",
  heading: "Safeguard your business",
  description:
    "With Omnicheck, transform how you approach compliance. Our tool does more than just monitor; it integrates automation, machine learning and a vast database to provide real-time updates and alerts. This proactive approach reduces the time spent on compliance, cuts down costs, and significantly enhances efficiency of your overall risk management strategy.",
  features: [
    {
      image: {
        src: "/compliance.svg",
        alt: "Compilance icon",
      },
      heading: "Boost Compliance Accuracy",
      description:
        "Utilize our comprehensive database to ensure accuracy in compliance reporting and partner verification.",
    },
    {
      image: {
        src: "/operational.png",
        alt: "Optimize icon",
      },
      heading: "Enhance Operational Efficiency",
      description:
        "With automated monitoring tools, increase your operational efficiency, allowing for a quicker response to potential compliance issues.",
    },
    {
      image: {
        src: "/reduce.svg",
        alt: "Reduce icon",
      },
      heading: "Reduce Costs",
      description:
        "Cut down on the need for extensive manual reviews and reduce resource expenditure on compliance activities.",
    },
  ],
};
