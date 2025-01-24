"use client";

import React from "react";
import { StaggeredHeading } from "@/components/helpers/word-curtain";

type Props = {
  heading: string;
  children: React.ReactNode;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { heading, children } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-between lg:gap-20">
          <StaggeredHeading className="text-light-foreground text-center text-4xl lg:font-light lg:text-8xl lg:text-left">
            {heading}
          </StaggeredHeading>
          <div className="text-light-foreground text-sm lg:text-lg text-center lg:text-left">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  heading:
    "We design modern tools that enable simpler and faster digital transformation.",
  children: (
    <React.Fragment>
      <p>
        Our commitment to delivering secure, reliable, and fully automated
        solutions ensures that our clients experience effortless and swift
        digital transitions.
      </p>
      <br />
      <p>
        At Qoobiss, innovation is at the heart of everything we do, making
        digital transformation accessible and efficient for businesses around
        the world.
      </p>
    </React.Fragment>
  ),
};
