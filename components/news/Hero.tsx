"use client";

type Props = {
  description: string;
};

export type HeroProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Hero = (props: HeroProps) => {
  const { description } = {
    ...HeroDefaults,
    ...props,
  } as Props;

  return (
    <section className="pt-20 lg:pt-40">
      <div className="container container-padding">
        <div className="text-light-foreground text-sm lg:text-lg items-center justify-center flex text-center mx-auto max-w-xl">
          {description}
        </div>
      </div>
    </section>
  );
};

export const HeroDefaults: HeroProps = {
  description:
    "Quisque at metus egestas, tempor odio nec, fringilla risus. Morbi tempor dictum risus vel vulputate. Sed lacinia, velit ac accumsan tempus, augue nisl mollis felis, eu pretium mauris nulla id nunc. Donec varius maximus metus in volutpat. Maecenas rhoncus orci felis, ut faucibus est efficitur at. Pellentesque tempor ornare suscipit. Nulla molestie laoreet justo, at fermentum odio ultricies nec. Proin faucibus efficitur hendrerit.",
};
