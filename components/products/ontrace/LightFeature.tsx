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

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 justify-center gap-5 z-10">
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
        <div className="flex flex-col flex-grow justify-start">
          <StaggeredHeading className="text-2xl lg:text-4xl text-light-foreground">
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
  tagline: "YOUR VERIFICATION PARTNER",
  heading: "Upgrade customer identification",
  description:
    "Bring all customer identification processes into a fully digital system without worrying about a lot of development effort. Our solution is scalable, effortlessly handling growing customer volumes. Make sure you stay compliant through advanced technologies like AI, effectively preventing fraud and achieve 100 % automation to streamline processes, in order to reduce manual tasks and associated costs.",
  features: [
    {
      image: {
        src: "/reduce.svg",
        alt: "Reduce icon",
      },
      heading: "Reduce Operational Costs",
      description:
        "Automating the identity verification process with Ontrace significantly lowers the need for extensive manual tasks and resources. This automation translates into reduced operational costs, freeing up your budget for other strategic investments.",
    },
    {
      image: {
        src: "/accelerate.svg",
        alt: "Accelerate icon",
      },
      heading: "Accelerate Customer Onboarding",
      description:
        "Say goodbye to manual verifications. Ontrace speeds up the entire client onboarding process, enhancing customer satisfaction by delivering quicker service in seconds.",
    },
    {
      image: {
        src: "/minimize.svg",
        alt: "Minimize icon",
      },
      heading: "Minimize Human Error",
      description:
        "By reducing the human element in the verification process, Ontrace minimizes the risks of oversight and fraudulent activity, ensuring a higher standard of security and reliability.",
    },
    {
      image: {
        src: "/improve.svg",
        alt: "Improve icon",
      },
      heading: "Improve Customer Experience",
      description:
        "Automated and efficient processes with minimal physical interaction cater to the modern customer's expectations for instant and hassle-free services, enhancing overall user experience.",
    },
    {
      image: {
        src: "/leverage.svg",
        alt: "Leverage icon",
      },
      heading: "Leverage Advanced Technology",
      description:
        "Ontrace provides access to the latest in verification technology, including extensive document databases and AI-powered analysis tools, making it easier to compile and assess necessary information for proper verification not only to comply with regulatory requirements but also to protect the financial system, enhance customer trust, and support law enforcement efforts against financial crimes.",
    },
  ],
};
