/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import AnimateHeading, {
  StaggeredHeading,
} from "@/components/helpers/word-curtain";
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
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
  features: Feature[];
  image: ImageProps;
};

export type DarkFeature2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const DarkFeature2 = (props: DarkFeature2Props) => {
  const { tagline, heading, description, button, features } = {
    ...DarkFeature2Defaults,
    ...props,
  } as Props;
  return (
    <section className="pt-20 lg:py-40 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 items-start lg:justify-between lg:grid-cols-[0.5fr_1fr]">
          <div className="flex flex-col gap-6 w-[85%]">
            <StaggeredHeading className="font-semibold uppercase text-xl text-electric-violet">
              {tagline}
            </StaggeredHeading>
            <StaggeredHeading className="text-light-foreground text-4xl lg:font-light lg:text-8xl">
              {heading}
            </StaggeredHeading>
          </div>
          <div className="mt-12 lg:mt-0 z-10 grid w-full auto-cols-fr grid-cols-1 gap-y-5 lg:gap-y-12 lg:grid-cols-2 lg:gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-[30px] lg:p-16 bg-white rounded-2xl"
              >
                <div className="mb-8">
                  <img
                    src={feature.icon.src}
                    className="size-24"
                    alt={feature.icon.alt}
                  />
                </div>
                <StaggeredHeading className="mb-6 md:mb-8 text-xl lg:text-4xl text-light-foreground">
                  {feature.heading}
                </StaggeredHeading>
                <AnimateHeading className="text-light-chapeau lg:text-lg leading-[1.3]">
                  {feature.description}
                </AnimateHeading>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-12 flex items-center justify-center gap-x-4 lg:mt-0 lg:hidden">
          <Link href="/partner-with-us">
            <Button {...button}>{button.title}</Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export const DarkFeature2Defaults: DarkFeature2Props = {
  tagline: "APPLICABLE USES",
  heading: "Digitalize verification across any industry and need",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nisl in est amet libero in mauris aliquet et. Tellus sagittis duis turpis diam libero at mattis nibh. Porta vitae a tortor et tristique nullam consequat nunc. Nisl sit sit eget pellentesque egestas. Etiam ac cursus adipiscing sit integer amet nullam. Pharetra sit ullamcorper quam parturient velit cras gravida.",
  features: [
    {
      icon: {
        src: "/banking.svg",
        alt: "Banking icon",
      },
      heading: "Banking & Finance",
      description:
        "As digital transactions increase and regulations evolve, the sector seeks advanced KYC technologies that balance security with operational efficiency. Automated identification processes not only keep financial institutions compliant but also enhance client engagement by simplifying the onboarding journey.",
    },
    {
      icon: {
        src: "/healthcare.svg",
        alt: "Healthcare icon",
      },
      heading: "Healthcare",
      description:
        "Prioritizing patient data integrity and privacy is crucial to ensure security and trust in the healthcare sector. KYC ensures accurate verification of patient and provider identities, crucial for fraud prevention and regulatory compliance in an era of expanding digital health services. This facilitates a secure, efficient patient engagement process, fostering a reliable healthcare environment.",
    },
    {
      icon: {
        src: "/gambling.svg",
        alt: "Gambling icon",
      },
      heading: "Gambling and Gaming",
      description:
        "Ontrace provides robust identity checks and age verification to ensure compliance with industry regulations. Our technology supports a secure gaming environment by preventing fraud and ensuring that all players meet the necessary legal requirements.",
    },
    {
      icon: {
        src: "/tele.svg",
        alt: "Tele icon",
      },
      heading: "Telecommuncations",
      description:
        "Streamline onboarding clients and fraud prevention with Ontrace. Our solution verifies new user identities swiftly, supporting compliance and reducing the risk of fraud in a sector that requires high security and quick processing times for new accounts and services.",
    },
  ],
  // button: { title: "Let's talk", variant: "dark-default" },
};
