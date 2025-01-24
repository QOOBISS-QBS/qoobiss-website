/* eslint-disable @next/next/no-img-element */
"use client";

import AnimateHeading, { StaggeredHeading } from "@/components/ui/word-curtain";

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

        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2 gap-5 z-10">
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
          <StaggeredHeading
            delay={1}
            className="text-2xl lg:text-4xl text-light-foreground"
          >
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
  tagline: "YOUR STRATEGIC PARTNER",
  heading: "Seize the future and originate success.",
  description:
    "Origin revolutionizes your client interactions and operational workflows by seamlessly automating and digitalizing the entire client journey, no matter the industry. Quickly transform client-facing operations with customizable digital workflows that are efficient and fully automated. Implement Origin and enhance your agility and responsiveness to market changes with reduced development costs and improved operational efficiency. Equip your business for sustainable growth and a competitive edge in the digital era.",
  features: [
    {
      image: {
        src: "/growth.svg",
        alt: "Growth icon",
      },
      heading: "Boost Growth",
      description:
        "Origin's fully automated platform revolutionizes the way you interact with clients. By seamlessly automating every stage of the client journey, Origin ensures unparalleled efficiency and accuracy, improving conversion rates while reducing customer acquisition costs.",
    },
    {
      image: {
        src: "/enhance.svg",
        alt: "Enhance icon",
      },
      heading: "Enhance Market Responsiveness",
      description:
        "Origin's versatility and adaptability allow for the automation of processes without the reliance on extensive development teams. This agility facilitates a faster time-to-market for any client journey, providing your business with a competitive edge by enabling swift responses to market demands.",
    },
    {
      image: {
        src: "/optimize.png",
        alt: "Optimize icon",
      },
      heading: "Optimize Operations",
      description:
        "Simplify the client journey, significantly reducing operational costs by eliminating manual tasks. With minimal human interaction, our solution ensures streamlined operations, enabling you to achieve more with less and drive substantial cost savings while maximizing productivity.",
    },
    {
      image: {
        src: "/relationships.svg",
        alt: "Relationships icon",
      },
      heading: "Build Lasting Relationships",
      description:
        "Origin orchestrates seamless, digitally-driven client journeys that enhance trust and satisfaction. By automating key touchpoints and streamlining processes, Origin enables businesses to deliver personalized interactions that promote brand loyalty and distinguish them in the competitive market.",
    },
  ],
};
