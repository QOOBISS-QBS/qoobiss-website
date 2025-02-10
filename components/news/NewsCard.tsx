/* eslint-disable @next/next/no-img-element */
"use client";

import { RxArrowRight } from "react-icons/rx";
import { StaggeredHeading } from "@/components/helpers/word-curtain";

type Image = {
  src: string;
  alt: string;
};

type Props = {
  url: string;
  image: Image;
  imageMobile: Image;
  date: string;
  title: string;
  description: string;
};

export type NewsCardProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const NewsCard = (props: NewsCardProps) => {
  const { url, image, imageMobile, date, title, description } = {
    ...NewsCardDefaults,
    ...props,
  } as Props;

  return (
    <div className="grid grid-cols-1 lg:flex items-center self-stretch p-5 lg:pr-[60px] gap-12 rounded-2xl bg-white/40">
      <div className="grid grid-cols-1 lg:flex items-center gap-6 lg:gap-10 flex-1 self-stretch">
        <img
          src={image.src}
          alt={image.alt}
          className="size-60 rounded-2xl flex-shrink-0 hidden lg:block"
        />
        <img
          src={imageMobile.src}
          alt={imageMobile.alt}
          className="md:w-full rounded-2xl flex-shrink-0 lg:hidden"
        />

        <div className="flex px-5 flex-col justify-center items-start gap-4 lg:gap-6 flex-1">
          <StaggeredHeading className="text-xl text-electric-violet font-semibold">
            {date}
          </StaggeredHeading>
          <StaggeredHeading className="text-xl lg:text-2xl text-light-foreground">
            {title}
          </StaggeredHeading>
          <p className="text-sm text-light-chapeau">{description}</p>
        </div>
      </div>
      <div className="lg:flex lg:items-start hidden">
        <a
          href={`/news${url}`}
          className="flex items-center rounded-[85px] border-2 border-dark-indigo justify-center p-2.5"
        >
          <RxArrowRight className="text-dark-indigo shrink-0 size-6" />
        </a>
      </div>
    </div>
  );
};

export const NewsCardDefaults: NewsCardProps = {
  url: "#",
  image: {
    src: "/use-case-image.png",
    alt: "News image",
  },
  imageMobile: {
    src: "/use-case-image.png",
    alt: "News image",
  },
  date: "January 20, 2024",
  title: "Company X Launches New Innovation Hub",
  description:
    "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque. Neque porttitor hendrerit ornare vel magna adipiscing. Sed condimentum orci augue mollis.",
};
