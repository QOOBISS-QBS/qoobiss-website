/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import AnimateHeading, { StaggeredHeading } from "@/components/ui/word-curtain";
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
                <p className="text-dark-chapeau lg:text-lg leading-[1.3]">
                  {feature.description}
                </p>
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
  heading: "Orchestrate any journey",
  description:
    "Embrace the power of automation with Origin’s comprehensive solution that streamlines your business processes from simple onboarding to the final agreement signing. Our platform ensures a fluid, efficient journey that not only reduces errors but also accelerates service delivery, allowing your business to operate more dynamically and responsively in real-time environments",
  features: [
    {
      icon: {
        src: "/orchestration.svg",
        alt: "Orchestration icon",
      },
      heading: "Integrated Process Orchestration",
      description:
        "Transform your operations with the help of an integrated management system that standardizes processes across the board. Configure behaviors, integrate with third-party interfaces, tap into external databases, and connect various devices to enhance your IT services. Simplify your operations while maintaining high standards of efficiency and accuracy.",
    },
    {
      icon: {
        src: "/nocode.svg",
        alt: "No code icon",
      },
      heading: "Effortless No-Code Configuration",
      description:
        "Empower your team to create and customize workflows without writing a single line of code. Build any type of form, add needed fields, and implement logic with ease. Design interfaces that align with your brand identity, all while bypassing the need for extensive internal development. Streamline your operations with efficient digital workflows that require zero coding.",
    },
    {
      icon: {
        src: "/plugins.svg",
        alt: "Robust plugins icon",
      },
      heading: "Robust Built-In Plugins",
      description:
        "Origin comes equipped with an array of built-in plugins to support essential operations such as remote identification, OCR data capture, and email and phone validation. Automate document generation, manage templates efficiently, and ensure compliance with electronic signatures and AML checks. Choose to use these tools all-in-one or selectively to best meet your needs.",
    },
    {
      icon: {
        src: "/scalable.svg",
        alt: "Scalable icon",
      },
      heading: "Scalable and Modular",
      description:
        "Designed to grow with your business, Origin integrates effortlessly into any existing technology stack, supporting both online and offline operations. Whether you need a fully automated solution or one with a personal touch, Origin adapts to your technological needs and growth, ensuring you can expand and modify your setup without any constraints.",
    },
  ],
  button: { title: "Book a demo", variant: "dark-default" },
};
