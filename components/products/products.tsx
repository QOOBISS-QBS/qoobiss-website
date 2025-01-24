/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  type ButtonProps as OriginalButtonProps,
} from "@/components/ui/button";
import Link from "next/link";
import AnimateHeading from "@/components/helpers/word-curtain";
import { cn } from "@/lib/utils";

type ButtonProps = OriginalButtonProps & {
  href?: string;
};

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  title: string;
  unColoredHeadingOne: string;
  coloredHeading: string;
  unColoredHeadingTwo: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type ProductsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Products = (props: ProductsProps) => {
  const { contents, images } = {
    ...ProductsDefaults,
    ...props,
  } as Props;

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const maxScroll = sectionHeight * contents.length * 0.75;
      if (currentScrollPosition <= maxScroll) {
        const currentSection = Math.floor(
          currentScrollPosition / sectionHeight
        );
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contents.length]);

  return (
    <section className="relative bg-dark-background">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500",
            "bg-[right_-2rem_top_0rem] [background-size:700px] bg-no-repeat",
            "sm:bg-[right_-7rem_top_0rem] sm:[background-size:1200px]",
            "lg:[background-size:cover]",
            {
              "opacity-100": activeSection === index,
              "opacity-0": activeSection !== index,
              "bg-[right_-5rem_top_0rem] lg:bg-[right_-10rem_top_0rem] ":
                index === 1,
            }
          )}
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      <div className="relative">
        {contents.map((content, index) => (
          <div key={index} className="h-screen flex items-center">
            <div className="container container-padding relative">
              <div className="max-w-2xl relative lg:ml-16">
                <div
                  className="absolute -left-16 top-0 text-2xl text-dark-foreground opacity-30 lg:flex hidden items-center"
                  style={{
                    top: `${Math.min(activeSection * 25, 75)}%`,
                    height: "25%",
                  }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div className="relative lg:pt-0 lg:pl-20">
                  <div className="absolute left-0 top-0 w-px h-[75%] -translate-x-1/2 bg-dark-foreground lg:flex hidden" />
                  <div
                    className="absolute left-0 w-2 h-1/4 -translate-x-1/2 bg-dark-foreground transition-all duration-300 lg:flex hidden"
                    style={{
                      top: `${Math.min(activeSection * 25, 75)}%`,
                    }}
                  />
                  <AnimateHeading className="text-gradient text-8xl lg:text-[100px] font-semibold mb-4">
                    {content.title}
                  </AnimateHeading>
                  <AnimateHeading className="text-4xl lg:text-8xl lg:font-light tracking-tight mb-6">
                    <span className="text-gradient">
                      {content.unColoredHeadingOne}
                    </span>{" "}
                    <span className="text-accent">
                      {content.coloredHeading}
                    </span>{" "}
                    <span className="text-gradient">
                      {content.unColoredHeadingTwo}
                    </span>
                  </AnimateHeading>
                  <AnimateHeading className="text-gradient lg:text-dark-chapeau max-w-lg mb-8 lg:text-lg">
                    {content.description}
                  </AnimateHeading>
                  <div className="flex gap-x-4">
                    {content.buttons.map(
                      (button, buttonIndex) =>
                        button.href && (
                          <Link
                            key={buttonIndex}
                            href={`/products/${button.href}`}
                          >
                            <Button {...button}>{button.title}</Button>
                          </Link>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ProductsDefaults: ProductsProps = {
  contents: [
    {
      title: "Origin",
      unColoredHeadingOne: "Orchestrate your",
      coloredHeading: "clients' journey",
      unColoredHeadingTwo: "digitally",
      description:
        "Transform your client-facing operations into automated customized digital workflows. Digitalize the entire end-to-end client journey across any industry. Create, streamline and run efficient digital workflows in days, not months—without writing a single line of code.",
      buttons: [
        {
          title: "Find out more",
          variant: "indigo",
          href: "origin",
        },
      ],
    },
    {
      title: "Ontrace",
      unColoredHeadingOne: "Welcome",
      coloredHeading: "verified clients",
      unColoredHeadingTwo: "instantly",
      description:
        "Digitalize all customer identification processes with minimal development effort. Our scalable solution effortlessly accommodates growing customer volumes, ensuring compliance and fraud prevention while achieving complete automation to streamline operations.",
      buttons: [
        {
          title: "Find out more",
          variant: "indigo",
          href: "ontrace",
        },
      ],
    },
    {
      title: "Omnicheck",
      unColoredHeadingOne: "",
      coloredHeading: "Smart Screening",
      unColoredHeadingTwo: "for the future",
      description:
        "Streamline your compliance process with an automated AML solution verification and monitorization of natural & legal persons. Easility Navigate complex AML compliance challenges of your contractual  customer relationship  and integrate critical AML checks within your core business operations, enhancing both compliance and operational efficiency.",
      buttons: [
        {
          title: "Find out more",
          variant: "indigo",
          href: "omnicheck",
        },
      ],
    },
  ],
  images: [
    {
      src: "/origin.png",
      alt: "Placeholder image 1",
    },
    {
      src: "/ontrace.png",
      alt: "Placeholder image 2",
    },
    {
      src: "/omnicheck.png",
      alt: "Placeholder image 3",
    },
  ],
};
