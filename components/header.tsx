/* eslint-disable @next/next/no-img-element */
import Spline from "@splinetool/react-spline/next";
import clsx from "clsx";

type Props = {
  headingFirstPart: string;
  coloredHeading: string;
  headingLastPart: string;
  description: string;
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { headingFirstPart, coloredHeading, headingLastPart, description } =
    props;

  return (
    <section
      className={clsx(
        "relative size-full h-[150vh] sm:h-[90vh] flex items-end justify-end lg:justify-normal lg:items-stretch lg:h-auto pb-20 lg:pb-0",
        "bg-[url('/home-background-mobile.png')] lg:bg-none",
        "bg-dark-background bg-right-top bg-no-repeat lg:bg-center lg:bg-cover",
        props.className
      )}
    >
      <Spline
        scene="https://prod.spline.design/o55RcWIPN3C1LKhi/scene.splinecode"
        className="absolute inset-0 size-full hidden lg:block"
      />
      <div className="container container-padding">
        <div className="pt-20 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-5">
            <div className="z-10">
              <h1 className="mb-5 text-8xl font-light md:mb-6 lg:text-[100px]">
                <span className="text-gradient">{headingFirstPart}</span>{" "}
                <span className="text-accent">{coloredHeading}</span>{" "}
                <span className="text-gradient">{headingLastPart}</span>
              </h1>
              <p className="text-2xl text-gradient">{description}</p>
              <button className="mt-12 flex items-end justify-center w-[60px] h-[93px] rounded-[85px] border-[1.5px] border-white/15 pb-5">
                <ArrowDown />
              </button>
            </div>
            <div className="hidden lg:flex" />
          </div>
        </div>
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none size-full lg:block hidden">
        <img
          src="/banner-ellipse.png"
          alt="Banner ellipse"
          className="object-cover"
        />
      </div>
      <div className="absolute z-0 inset-0 pointer-events-none lg:hidden">
        <img
          src="/home-ellipse.png"
          alt="Banner ellipse"
          className="object-cover w-full"
        />
      </div>
    </section>
  );
};

// export const HeaderDefaults: HeaderProps = {
//   headingFirstPart: "No-code,",
//   coloredHeading: "perfectly fitted",
//   headingLastPart: "digitalisation",
//   description:
//     "Automate your onboarding and contracting processes through our customized solutions for a seamless customer experience.",
// };

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
