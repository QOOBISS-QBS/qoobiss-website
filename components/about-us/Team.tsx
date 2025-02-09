/* eslint-disable @next/next/no-img-element */
"use client";

import { StaggeredHeading } from "@/components/helpers/word-curtain";

type ImageProps = {
  asset: {
    url: string;
  };
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  teamMembers: TeamMember[];
};

export type TeamProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Team = (props: TeamProps) => {
  const { tagline, heading, teamMembers } = {
    ...TeamDefaults,
    ...props,
  } as Props;
  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding flex flex-col gap-6 lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <StaggeredHeading className="font-semibold uppercase text-xl text-electric-violet">
            {tagline}
          </StaggeredHeading>
          <div className="max-w-lg w-full">
            <StaggeredHeading className="text-light-foreground text-4xl lg:font-light lg:text-8xl">
              {heading}
            </StaggeredHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start justify-center lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <div className="size-full">
                <img
                  src={member.image?.asset?.url || "/user.png"}
                  alt={member.name}
                  className="size-full object-cover rounded-t-2xl aspect-square"
                />
              </div>
              <div className="flex flex-col gap-2 lg:gap-4 bg-white/40 p-6 lg:p-10 rounded-b-2xl">
                <h1 className="text-light-foreground lg:text-2xl">
                  {member.name}
                </h1>
                <p className="lg:text-lg text-light-chapeau">
                  {member.jobTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TeamDefaults: TeamProps = {
  tagline: "The team",
  heading: "Meet our leaders",
  teamMembers: [
    {
      image: {
        asset: {
          url: "/andrei-buzgan.jpg",
        },
      },
      name: "Andrei Buzgan",
      jobTitle: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        asset: {
          url: "/alexandru-rizea.jpg",
        },
      },
      name: "Alexandru Rizea",
      jobTitle: "CTO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        asset: {
          url: "/adrian-golomoz.jpg",
        },
      },
      name: "Adrian Golomoz",
      jobTitle: "CFO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: {
        asset: {
          url: "/ramona-maria.jpg",
        },
      },
      name: "Ramona Maria Voiculescu",
      jobTitle: "Business Development Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
};

Team.displayName = "Team";
