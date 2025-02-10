/* eslint-disable @next/next/no-img-element */
"use client";

import { NewsCard } from "./NewsCard";

type Image = {
  src: string;
  alt: string;
};

type News = {
  url: string;
  image: Image;
  imageMobile: Image;
  date: string;
  title: string;
  description: string;
};

type Props = {
  news: News[];
};

export type NewsSectionProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const NewsSection = (props: NewsSectionProps) => {
  const { news } = {
    ...NewsSectionDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40 relative">
      <div className="container container-padding max-w-xl">
        <div className="grid grid-cols-1 lg:flex lg:flex-col gap-5">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        <div className="absolute -z-10 inset-0 pointer-events-none">
          <img
            src="/use-cases-ellipse.png"
            alt="Banner ellipse"
            className="size-full"
          />
        </div>
      </div>
    </section>
  );
};

export const NewsSectionDefaults: NewsSectionProps = {
  news: [
    {
      url: "/announcement-1",
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
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque.",
    },
    {
      url: "/press-release-1",
      image: {
        src: "/use-case-image.png",
        alt: "News image",
      },
      imageMobile: {
        src: "/use-case-image.png",
        alt: "News image",
      },
      date: "January 15, 2024",
      title: "Q4 Financial Results Exceed Expectations",
      description:
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque.",
    },
    {
      url: "/blog-post-1",
      image: {
        src: "/use-case-image.png",
        alt: "News image",
      },
      imageMobile: {
        src: "/use-case-image.png",
        alt: "News image",
      },
      date: "January 10, 2024",
      title: "The Future of Digital Innovation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Integer scelerisque blandit at etiam commodo phasellus nam. Scelerisque commodo pulvinar pulvinar rhoncus a neque.",
    },
  ],
};
