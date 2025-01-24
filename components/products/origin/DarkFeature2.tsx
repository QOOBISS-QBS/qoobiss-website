/* eslint-disable @next/next/no-img-element */
"use client";
import { Button, type ButtonProps } from "@/components/ui/button";
import AnimateHeading, { StaggeredHeading } from "@/components/ui/word-curtain";

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
            <p className="font-semibold uppercase text-xl text-electric-violet">
              {tagline}
            </p>
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
          <Button {...button}>{button.title}</Button>
        </div> */}
      </div>
    </section>
  );
};

export const DarkFeature2Defaults: DarkFeature2Props = {
  tagline: "APPLICABLE USES",
  heading: "Benefit from a versatile solution to meet any industry need",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nisl in est amet libero in mauris aliquet et. Tellus sagittis duis turpis diam libero at mattis nibh. Porta vitae a tortor et tristique nullam consequat nunc. Nisl sit sit eget pellentesque egestas. Etiam ac cursus adipiscing sit integer amet nullam. Pharetra sit ullamcorper quam parturient velit cras gravida.",
  features: [
    {
      icon: {
        src: "/public.svg",
        alt: "Financial icon",
      },
      heading: "Financial Services",
      description:
        "Automatically open accounts, process applications, apply for loans, and easily integrate needed solutions to transfer funds to your customers instantly. Our solution streamlines financial operations, ensuring speed and accuracy in every origination process.",
    },
    {
      icon: {
        src: "/insurance.svg",
        alt: "Insurance icon",
      },
      heading: "Insurance",
      description:
        "Provide your clients with a secure digital platform to onboard and apply for insurance Enhance customer engagement and streamline claims processing with tailored digital tools.",
    },
    {
      icon: {
        src: "/healthcare.svg",
        alt: "Healthcare icon",
      },
      heading: "Healthcare Services",
      description:
        "Securely track patient statuses and process health data with precision using specialized tools. Prevent sensitive information leakage and improve healthcare delivery by efficiently managing patient data",
    },
    {
      icon: {
        src: "/financial.svg",
        alt: "Public services icon",
      },
      heading: "Public Services",
      description:
        "Simplify onboarding, information collection, and legal document signing with our hassle-free digital solutions. Streamline public interactions and improve accessibility to services with efficient, tailored processes.",
    },
  ],
  // button: { title: "Let's talk", variant: "dark-default" },
};
