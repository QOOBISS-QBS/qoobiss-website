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
  heading: string;
  description: string;
  button: ButtonProps;
  features: Feature[];
  image: ImageProps;
};

export type DarkFeatureProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const DarkFeature = (props: DarkFeatureProps) => {
  const { heading, description, button, features } = {
    ...DarkFeatureDefaults,
    ...props,
  } as Props;
  return (
    <section className="pb-12 pt-6 lg:py-20 lg:pb-40 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 items-start lg:justify-between lg:grid-cols-[0.5fr_1fr]">
          <div className="w-[85%]">
            <AnimateHeading className="mb-5 lg:text-2xl text-gradient">
              {heading}
            </AnimateHeading>
            <p className="text-lg text-dark-chapeau">{description}</p>
            <div className="mt-6 items-center gap-x-4 md:mt-10 lg:flex hidden">
              <Link href="https://calendly.com/qoobiss/30min">
                <Button {...button}>{button.title}</Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 grid w-full auto-cols-fr grid-cols-1 gap-y-5 lg:gap-y-12 lg:grid-cols-2 lg:gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-[30px] lg:p-16 custom-gradient rounded-2xl"
              >
                <div className="mb-8">
                  <img
                    src={feature.icon.src}
                    className="size-24"
                    alt={feature.icon.alt}
                  />
                </div>
                <StaggeredHeading className="mb-6 md:mb-8 text-xl lg:text-4xl text-dark-foreground">
                  {feature.heading}
                </StaggeredHeading>
                <AnimateHeading className="text-dark-chapeau lg:text-lg leading-[1.3]">
                  {feature.description}
                </AnimateHeading>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center gap-x-4 lg:mt-0 lg:hidden">
          <Link href="https://calendly.com/qoobiss/30min">
            <Button {...button}>{button.title}</Button>
          </Link>
        </div>
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none size-full">
        <img
          src="/use-cases-ellipse.png"
          alt="Banner ellipse"
          className="size-full"
        />
      </div>
    </section>
  );
};

export const DarkFeatureDefaults: DarkFeatureProps = {
  heading: "Simple and fully automatized",
  description:
    "The identification process takes place in two different stages. First phase consists in collecting evidence from the applicant such as phone number, identification document and face. In the second phase , technology takes over and analyzes all the data, verifies it  and reports the results of identification. Simple and fully automatized.",
  features: [
    {
      icon: {
        src: "/evidence.svg",
        alt: "Evidence icon",
      },
      heading: "Evidence Collecting Tool & API Service",
      description:
        "Easily integrate our web-based tool on any website to collect evidence seamlessly. It's as simple as adding a chat module—no extensive development team required, just a few lines of code. Access identification results, reports, images, and others through our REST API service.",
    },
    {
      icon: {
        src: "/optical.svg",
        alt: "Optical icon",
      },
      heading: "Optical Character Recognition (OCR)",
      description:
        "With Ontrace, manual data input errors are a thing of the past. Our advanced OCR technology ensures accurate data capture, reducing inaccuracies and compliance risks that can stem from human error.",
    },
    {
      icon: {
        src: "/liveness.svg",
        alt: "AI Liveness icon",
      },
      heading: "AI Liveness Detection",
      description:
        "Verifies real time if the document is presented live (document liveness) and the person is real (face liveness). No presence of screens, prints, overlapping other images or video injections.",
    },
    {
      icon: {
        src: "/multiple.svg",
        alt: "Multiple steps icon",
      },
      heading: "Multiple Steps of Verification",
      description:
        "Verification is made through multiple layers and actions to prove identity. It also scans and cross checks data through Machine Reading Zones (MRZ).",
    },
  ],
  button: { title: "Book a demo", variant: "dark-default" },
};
