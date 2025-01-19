/* eslint-disable @next/next/no-img-element */
// components/header.tsx
"use client";
import clsx from "clsx";
import { StaggeredHeading } from "./ui/word-curtain";
import { SplineWrapper } from "./helpers/spline-wrapper";
import { HeaderData, sanitizeHeaderData } from "@/types/header";

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<HeaderData>;

export const Header = (props: HeaderProps) => {
  // Sanitize the incoming data
  const sanitizedData = sanitizeHeaderData({
    coloredHeading: props.coloredHeading || HeaderDefaults.coloredHeading,
    heading: props.heading || HeaderDefaults.heading,
    description: props.description || HeaderDefaults.description,
  });

  if (!sanitizedData) {
    console.error("Invalid header data provided");
    return null;
  }

  const { coloredHeading, heading, description } = sanitizedData;

  const scrollToCta = () => {
    const ctaSection = document.getElementById("next-section");
    if (ctaSection) {
      const yOffset = -100;
      const y =
        ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      className={clsx(
        "relative min-h-screen flex flex-col lg:flex-row lg:items-stretch pb-24 lg:pb-0 lg:min-h-[auto]",
        "bg-[url('/home-background-mobile.png')] lg:bg-none",
        "bg-dark-background bg-no-repeat [background-size:100%_auto] lg:bg-center lg:bg-cover",
        props.className
      )}
    >
      <div
        className="w-full lg:hidden"
        style={{
          paddingTop: "calc(100% * 1)",
        }}
      />

      <div className="absolute top-0 right-0 h-full hidden lg:w-[55%] lg:block">
        <SplineWrapper />
      </div>

      <div className="container container-padding z-10 lg:static">
        <div className="lg:py-24 lg:max-w-[45%]">
          <h1 className="mb-5 text-7xl font-light md:mb-6 lg:text-[80px]">
            <StaggeredHeading wordClassName="text-accent">
              {coloredHeading}
            </StaggeredHeading>
            <StaggeredHeading wordClassName="text-gradient">
              {heading}
            </StaggeredHeading>
          </h1>
          <p className="text-2xl text-gradient">{description}</p>
          <button
            onClick={scrollToCta}
            className="mt-12 flex items-end justify-center w-[60px] h-[93px] rounded-[85px] border-[1.5px] border-white/15 pb-5 transition-all hover:translate-y-1 hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Scroll to Why Qoobiss section"
          >
            <ArrowDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export const HeaderDefaults: HeaderData = {
  coloredHeading: "Digital transformation",
  heading: "accessible to everyone",
  description:
    "Grow the power of automation with our modern tools and enhance customer relationships at every touchpoint.",
};

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="28"
    viewBox="0 0 12 28"
    fill="#fff"
    className="w-[27px] flex-shrink-0"
  >
    <path
      d="M5.46967 27.5303C5.76256 27.8232 6.23744 27.8232 6.53033 27.5303L11.3033 22.7574C11.5962 22.4645 11.5962 21.9896 11.3033 21.6967C11.0104 21.4038 10.5355 21.4038 10.2426 21.6967L6 25.9393L1.75736 21.6967C1.46447 21.4038 0.989593 21.4038 0.6967 21.6967C0.403807 21.9896 0.403807 22.4645 0.6967 22.7574L5.46967 27.5303ZM5.25 3.27835e-08L5.25 27L6.75 27L6.75 -3.27835e-08L5.25 3.27835e-08Z"
      fill="white"
    />
  </svg>
);
