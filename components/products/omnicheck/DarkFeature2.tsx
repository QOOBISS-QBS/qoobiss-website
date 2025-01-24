/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import AnimateHeading, {
  StaggeredHeading,
} from "@/components/helpers/word-curtain";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Feature = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  features: Feature[];
  image: ImageProps;
};

export type DarkFeature2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const DarkFeature2 = (props: DarkFeature2Props) => {
  const { tagline, heading, description, button, features } = {
    ...DarkFeature2Defaults,
    ...props,
  } as Props;
  return (
    <section className="pt-20 lg:py-40 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 items-start lg:justify-between lg:grid-cols-[0.5fr_1fr]">
          <div className="flex flex-col gap-6 w-[85%]">
            <StaggeredHeading className="font-semibold uppercase text-xl text-electric-violet">
              {tagline}
            </StaggeredHeading>
            <StaggeredHeading className="text-light-foreground text-4xl lg:font-light lg:text-8xl">
              {heading}
            </StaggeredHeading>
          </div>
          <div className="mt-12 lg:mt-0 z-10 grid w-full auto-cols-fr grid-cols-1 gap-y-5 lg:gap-y-12 lg:grid-cols-2 lg:gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-[30px] lg:p-16 bg-white rounded-2xl"
              >
                <div className="mb-8">
                  <img
                    src={feature.icon.src}
                    className="size-24"
                    alt={feature.icon.alt}
                  />
                </div>
                <StaggeredHeading className="mb-6 md:mb-8 text-xl lg:text-4xl text-light-foreground">
                  {feature.heading}
                </StaggeredHeading>
                <AnimateHeading className="text-light-chapeau lg:text-lg leading-[1.3]">
                  {feature.description}
                </AnimateHeading>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-12 flex items-center justify-center gap-x-4 lg:mt-0 lg:hidden">
          <Link href="/partner-with-us">
            <Button {...button}>{button.title}</Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export const DarkFeature2Defaults: DarkFeature2Props = {
  tagline: "APPLICABLE USES",
  heading: "Build trust in every industry",
  description: "",
  features: [
    {
      icon: {
        src: "/public.svg",
        alt: "Public icon",
      },
      heading: "Financial Industry",
      description:
        "In the rapidly evolving financial sector, compliance must keep pace with complex regulations. Omnicheck delivers a fast, secure, and scalable AML solution designed to proactively prevent and detect money laundering. It ensures strict adherence to both national and international AML regulations, maintaining your organization’s compliance and security in a demanding financial landscape.",
    },
    {
      icon: {
        src: "/gambling.svg",
        alt: "Gambling icon",
      },
      heading: "Gambling and Gaming",
      description:
        "For the gambling and gaming industry, maintaining a secure and trustworthy environment is crucial. Omnicheck performs thorough identity and business verification checks to prevent gambling fraud,. Our robust AML measures uphold a secure, safe, and reliable gaming experience, giving confidence for your customers.",
    },
    {
      icon: {
        src: "/insurance.svg",
        alt: "Insurance icon",
      },
      heading: "Insurance",
      description:
        "Omnicheck helps the insurance industry combat fraud within claims and compensation payouts. By ensuring that all transactions and policy beneficiaries are fully legitimate and transparent, our solution protects the industry from being exploited for money laundering, thus safeguarding the integrity of insurance operations.",
    },
    {
      icon: {
        src: "/compliance.svg",
        alt: "Compliance icon",
      },
      heading: "Liberal Professions (Lawyers, Notaries, etc.)",
      description:
        "Liberal professionals such as lawyers and notaries face unique risks related to money laundering and the need to maintain trust and credibility. Omnicheck supports these professionals by safeguarding the integrity and reputation of their practices, ensuring they can operate with the highest levels of trust and compliance.",
    },
  ],
  // button: { title: "Let's talk", variant: "dark-default" },
};
