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
  heading: "Unlock unparalleled risk management capabilities",
  description:
    "Unlock unparalleled risk management capabilities with Omnicheck, designed to ensure your business adheres to the highest standards of compliance effortlessly. From world-class data accuracy to real-time risk assessments, Omnicheck equips you with the tools to manage and mitigate potential compliance risks proactively.",
  features: [
    {
      icon: {
        src: "/class.svg",
        alt: "Integration icon",
      },
      heading: "World-Class Database Accuracy",
      description:
        "With over 5 million profiles compiled from 45,000 public sources, Omnicheck provides exhaustive data on international and unilateral sanctions, along with reputational risk exposure from asset managers, financial regulators, and law enforcement agencies. This vast database ensures you have the most accurate and comprehensive compliance information at your disposal.",
    },
    {
      icon: {
        src: "/monitoring.png",
        alt: "Scalability icon",
      },
      heading: "Automation and AI-Powered Monitoring",
      description:
        "Leverage advanced AI technology for scalable monitoring and processing, allowing Omnicheck to handle vast amounts of data efficiently. This automation ensures that your compliance processes are not only fast but also accurate, reducing human error and enhancing overall security.",
    },
    {
      icon: {
        src: "/seamless.svg",
        alt: "Secure icon",
      },
      heading: "Seamless System Integration",
      description:
        "Omnicheck integrates smoothly with your existing systems, ensuring that compliance tools enhance your operations without disruption. This seamless integration facilitates a unified approach to compliance management, making it easier to maintain a consistent and reliable compliance framework.",
    },
    {
      icon: {
        src: "/risk.svg",
        alt: "Internal dev icon",
      },
      heading: "Complete Risk Management System",
      description:
        "Benefit from a comprehensive risk management approach with features like detailed individual profile photographs, 360-degree risk analysis, updates every 48 hours for Politically Exposed Persons (PEPs), and sanctions updates every 30 minutes. Regular updates on reputational risk exposure (RRE) ensure that your data remains current and actionable.",
    },
  ],
  button: { title: "Book a demo", variant: "dark-default" },
};
