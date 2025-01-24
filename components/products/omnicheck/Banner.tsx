/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";
import Link from "next/link";
import AnimateHeading from "@/components/helpers/word-curtain";

type Props = {
  title: string;
  unColoredHeadingOne: string;
  coloredHeading: string;
  unColoredHeadingTwo: string;
  description: string;
  button: ButtonProps;
};

export type BannerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Banner = (props: BannerProps) => {
  const {
    title,
    unColoredHeadingOne,
    coloredHeading,
    unColoredHeadingTwo,
    description,
    button,
  } = {
    ...BannerDefaults,
    ...props,
  } as Props;

  return (
    <section
      className={clsx(
        "relative flex flex-col items-end justify-end lg:justify-center lg:items-center size-full min-h-[925px] lg:h-[80vh] pb-20 lg:pb-0",
        "bg-[url('/omnicheck.png')]",
        "bg-dark-background bg-[right_-58px_top_-80px] [background-size:700px] bg-no-repeat",
        "md:[background-size:900px]",
        "lg:bg-center lg:[background-size:cover]",
        props.className
      )}
    >
      <div className="container container-padding">
        <div className="flex flex-col items-start size-full justify-center gap-[30px] lg:gap-[50px] z-10">
          <div className="flex flex-col items-start gap-5 lg:gap-8">
            <AnimateHeading className="text-gradient text-8xl lg:text-[100px] font-semibold">
              {title}
            </AnimateHeading>
            <AnimateHeading className="lg:flex lg:flex-col lg:items-start text-4xl lg:text-8xl lg:font-light tracking-tight">
              <span className="text-gradient">{unColoredHeadingOne}</span>{" "}
              <span className="text-accent">{coloredHeading}</span>{" "}
              <span className="text-gradient">{unColoredHeadingTwo}</span>
            </AnimateHeading>
            <AnimateHeading className="text-gradient lg:text-dark-chapeau max-w-sm lg:text-lg">
              {description}
            </AnimateHeading>
          </div>
          <Link href="https://calendly.com/qoobiss/30min">
            <Button {...button}>{button.title}</Button>
          </Link>
        </div>
      </div>
      {/* <div className="absolute z-0 inset-0 pointer-events-none lg:block hidden">
        <img
          src="/banner-ellipse.png"
          alt="Banner ellipse"
          className="object-cover w-full"
        />
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none lg:hidden">
        <img
          src="/banner-ellipse-mobile.png"
          alt="Banner ellipse"
          className="object-cover w-full"
        />
      </div> */}
    </section>
  );
};

export const BannerDefaults: BannerProps = {
  title: "Omnicheck",
  unColoredHeadingOne: "",
  coloredHeading: "Smart Screening",
  unColoredHeadingTwo: "for the future",
  description:
    "Streamline your compliance process with an automated AML solution verification and monitorization of natural & legal persons. Easility Navigate complex AML compliance challenges of your contractual  customer relationship  and integrate critical AML checks within your core business operations, enhancing both compliance and operational efficiency.",
  button: {
    title: "Book a demo",
    variant: "indigo",
    size: "indigo",
  },
};
