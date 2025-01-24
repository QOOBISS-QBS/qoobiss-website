/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Props = {
  tag: string;
  whiteText: string;
  accentText: string;
};

export type GetInTouchProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const GetInTouch = (props: GetInTouchProps) => {
  const { tag, whiteText, accentText } = {
    ...GetInTouchDefaults,
    ...props,
  } as Props;

  if (!tag || !whiteText || !accentText) {
    console.error("Required props are missing in GetInTouch component");
    return null;
  }

  return (
    <section
      className={clsx(
        "pt-20 lg:pt-28 z-10 bg-light-background relative",
        props.className
      )}
    >
      <div className="container container-padding">
        <div className="relative size-full rounded-2xl overflow-hidden p-20 bg-[url('/get-in-touch-bg-mobile.png')] lg:bg-[url('/get-in-touch-bg.svg')] bg-center bg-no-repeat bg-cover">
          <img
            src="/get-in-touch-ellipse.svg"
            alt="Get in touch background"
            className="absolute inset-0 size-full object-cover z-0"
          />
          <div className="relative z-10 flex flex-col justify-center items-center lg:justify-normal lg:items-start gap-10 lg:gap-20">
            <p className="text-electric-violet text-base lg:text-xl font-semibold uppercase">
              {tag}
            </p>
            <h2 className="lg:text-[90px] text-8xl lg:w-[50%] text-center lg:text-left lg:font-light">
              <span className="text-gradient">{whiteText}</span>{" "}
              <div className="lg:flex lg:gap-6 lg:items-center">
                <span className="text-accent">{accentText}</span>
                <div className="flex items-center lg:justify-normal justify-center">
                  <Link
                    className="mt-8 lg:mt-0"
                    href="https://calendly.com/qoobiss/30min"
                  >
                    <CtaIcon />
                  </Link>
                </div>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export const GetInTouchDefaults: GetInTouchProps = {
  tag: "Connect with us",
  whiteText: "Book a",
  accentText: "demo",
};

const CtaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="86"
      height="86"
      viewBox="0 0 86 86"
      fill="none"
    >
      <g filter="url(#filter0_i_1342_483)">
        <rect
          width="86"
          height="86"
          rx="43"
          fill="url(#paint0_linear_1342_483)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.9929 25.6082L60.9028 41.5181C61.8791 42.4944 61.8791 44.0773 60.9028 45.0536L44.9929 60.9635C44.0166 61.9399 42.4336 61.9399 41.4573 60.9635C40.481 59.9872 40.481 58.4043 41.4573 57.428L53.0995 45.7859H29.4365C28.0558 45.7859 26.9365 44.6666 26.9365 43.2859C26.9365 41.9052 28.0558 40.7859 29.4365 40.7859H53.0995L41.4573 29.1437C40.481 28.1674 40.481 26.5845 41.4573 25.6082C42.4336 24.6319 44.0166 24.6319 44.9929 25.6082Z"
          fill="url(#paint1_linear_1342_483)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1342_483"
          x="0"
          y="0"
          width="86"
          height="86"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1342_483"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1342_483"
          x1="0"
          y1="0"
          x2="0"
          y2="86"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8460E9" />
          <stop offset="1" stopColor="#541EAC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1342_483"
          x1="29.1052"
          y1="22.5222"
          x2="68.2666"
          y2="59.3256"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#C3B6F8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
