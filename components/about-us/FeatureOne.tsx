/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";
import { StaggeredHeading } from "@/components/helpers/word-curtain";

type Image = {
  src: string;
  alt?: string;
};

type Props = {
  tagline: string;
  heading: string;
  children: React.ReactNode;
  image: Image;
  imageMobile: Image;
};

export type FeatureOneProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const FeatureOne = (props: FeatureOneProps) => {
  const { tagline, heading, children, image, imageMobile } = {
    ...FeatureOneDefaults,
    ...props,
  } as Props;

  return (
    <section className="lg:pt-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-between lg:gap-20">
          <div className="py-20 lg:py-0">
            <img
              src={image.src}
              alt={image.alt || ""}
              className="lg:block hidden size-full"
            />
            <img
              src={imageMobile.src}
              alt={imageMobile.alt || ""}
              className="lg:hidden size-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 container-padding">
            <StaggeredHeading className="font-semibold uppercase text-xl text-electric-violet">
              {tagline}
            </StaggeredHeading>
            <StaggeredHeading className="text-light-foreground text-4xl lg:text-8xl lg:font-light">
              {heading}
            </StaggeredHeading>
            <div className="text-light-chapeau lg:text-lg">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeatureOneDefaults: FeatureOneProps = {
  tagline: "Our vision",
  heading: "At Qoobiss, each day inspires new innovations.",
  children: (
    <React.Fragment>
      <p>
        We believe that the future belongs to those who prepare for it today. As
        your trusted partner, we equip you with advanced tools and innovative
        solutions necessary to stay ahead in the digital era. With Qoobiss you
        get to set new standards, ensuring that every tomorrow finds you at the
        forefront of technological advancement and market leadership
      </p>
    </React.Fragment>
  ),
  image: {
    src: "/q-image.png",
    alt: "About Us image",
  },
  imageMobile: {
    src: "/q-image.png",
    alt: "About Us image",
  },
};
