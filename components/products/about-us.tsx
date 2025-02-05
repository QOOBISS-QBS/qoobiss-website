/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { StaggeredHeading } from "@/components/helpers/word-curtain";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

type Image = {
  src: string;
  alt?: string;
};

type StatProps = {
  value: string;
  label: string;
  description: string;
};

type Props = {
  tagline: string;
  title: string;
  image: Image;
  button: ButtonProps;
  stats: StatProps[];
};

export type AboutUsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AboutUs = async ({ aboutUsData }: any) => {
  const defaultData = {
    ...AboutUsDefaults,
  } as Props;

  const {
    tagline: sanityTagline,
    title: sanityTitle,
    image: sanityImage,
    button: sanityButton,
    stats: sanityStats,
  } = aboutUsData || {};

  const { tagline, title, image, button, stats } = {
    tagline: sanityTagline || defaultData.tagline,
    title: sanityTitle || defaultData.title,
    image: sanityImage || defaultData.image,
    button: sanityButton || defaultData.button,
    stats: sanityStats || defaultData.stats,
  };

  // Handle image URL safely
  const imageUrl =
    image && typeof image === "object" && "asset" in image
      ? urlFor(image).url()
      : null;
  const fallbackImageUrl = defaultData.image.src;
  const displayImageUrl = imageUrl || image?.src || fallbackImageUrl;
  const imageAlt =
    (image && image.alt) || defaultData.image.alt || "About Us Image";

  return (
    <section className="pt-20 lg:py-40 relative bg-light-background z-20">
      <div className="container container-padding">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <StaggeredHeading className="font-semibold uppercase text-xl text-electric-violet mb-8">
              {tagline}
            </StaggeredHeading>
            <StaggeredHeading className="text-light-foreground text-4xl lg:font-light lg:text-11xl mb-8">
              {title}
            </StaggeredHeading>
            <img
              src={displayImageUrl}
              alt={imageAlt}
              className="w-full rounded-lg lg:mb-12"
            />
            <Link href="https://calendly.com/qoobiss/30min">
              <Button {...button} className="lg:flex hidden">
                {button.title}
              </Button>
            </Link>
          </div>
          <div className="lg:w-[35%]">
            {stats.map((stat: any, index: any) => (
              <Stat key={index} {...stat} />
            ))}
          </div>

          <div className="lg:hidden items-center justify-center text-center flex w-full mt-14 lg:mt-0">
            <Link href="https://calendly.com/qoobiss/30min">
              <Button {...button} className="px-[30px] py-[15px]">
                {button.title}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Stat = ({ value, label, description }: StatProps) => {
  return (
    <div className="mb-8">
      <StaggeredHeading className="text-[100px] lg:text-[140px] leading-[1.3] font-extralight text-light-foreground">
        {value}
      </StaggeredHeading>
      <StaggeredHeading className="text-2xl mb-4">{label}</StaggeredHeading>
      <p className="text-light-chapeau lg:text-md leading-[1.4] lg:w-1/2">
        {description}
      </p>
    </div>
  );
};

export const AboutUsDefaults: AboutUsProps = {
  tagline: "NUMBERS AT A GLANCE",
  title: "Experience the power of efficiency",
  image: {
    src: "/aboutus-image.png",
    alt: "Q's image",
  },
  button: {
    title: "Book a demo",
    variant: "light-default",
    size: "default",
  },
  stats: [
    {
      value: "75%",
      label: "Less time on overhead coding",
      description:
        "This reduction means your teams can focus more on critical tasks such as innovation and problem-solving rather than being consumed by routine coding work  for developming  new solutions.",
    },
    {
      value: "57%",
      label: "Faster to market",
      description:
        "By automating and optimizing key processes, our solution enables businesses to accelerate product launches and updates, swiftly responding to market demands and customer needs. This efficiency also ensures that you remain competitive and aligned with evolving industry trends.",
    },
    {
      value: "30%",
      label: "Resources savings",
      description:
        "Digitalized workflows and automated processes reduce manual tasks, allowing your team to focus on strategic initiatives rather than routine operations. Your business can do more with less time, maximizing productivity and minimizing unnecessary costs.",
    },
  ],
};
