/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Separator } from "./ui/separator";
import { urlFor } from "@/sanity/lib/image";

type CustomButtonProps = ButtonProps & {
  title: string;
  url: string;
  variant?: string;
  size?: string;
};

type NavLink = {
  url: string;
  title: string;
};

type SanityNavbarProps = {
  logo: {
    asset: { url: string };
    alt: string;
  };
  navLinks: NavLink[];
  button: CustomButtonProps;
};

export type NavbarProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<SanityNavbarProps>;

export const Navbar = (props: NavbarProps) => {
  const { logo, navLinks, button } = props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();
  const isContactPage = currentPath === "/contact";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={clsx("flex w-full items-center lg:min-h-18 absolute z-[100]", {
        "bg-dark-background": isContactPage,
        "bg-dark-background lg:bg-transparent": isMobileMenuOpen,
        "bg-transparent": !isMobileMenuOpen && !isContactPage,
        "bg-[url('/navbar-ellipse-mobile.png')] bg-no-repeat": isMobileMenuOpen,
      })}
    >
      <div className="container">
        <div className="size-full lg:flex lg:items-center lg:justify-between border-b border-[#69519433] lg:py-8 z-10">
          <div className="flex min-h-16 py-5 lg:py-0 items-center justify-between md:min-h-18 lg:min-h-full container-padding">
            <Link href={logo?.asset?.url || "/"}>
              <img
                src={
                  logo?.asset?.url ? urlFor(logo.asset).url() : "/qoobiss.svg"
                }
                alt={logo?.alt || "Qoobiss logo"}
              />
            </Link>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-white"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: {
                height: "var(--height-open, 100dvh)",
              },
              close: {
                height: "var(--height-closed, 0)",
              },
            }}
            initial="close"
            exit="close"
            animate={isMobileMenuOpen ? "open" : "close"}
            transition={{ duration: 0.3 }}
            className="overflow-hidden container-padding lg:[--height-closed:auto] lg:[--height-open:auto] flex lg:flex-row flex-col items-center gap-6 lg:gap-[36px]"
          >
            {navLinks?.map((navLink, index) => (
              <div key={index} className="first:pt-20 lg:first:pt-0">
                <Link
                  href={navLink.url}
                  className={`lg:text-[15px]
                  ${
                    currentPath === navLink.url
                      ? "text-accent font-semibold"
                      : "text-dark-foreground"
                  }`}
                >
                  {navLink.title}
                </Link>
              </div>
            ))}
            <Separator
              className="bg-white/25 w-px h-5"
              orientation="vertical"
            />
            {isMobileMenuOpen && (
              <Separator className="bg-white/25 w-[50px] my-2.5" />
            )}
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              {button && button.url && (
                <Link href={button.url}>
                  <Button
                    variant={button.variant as ButtonProps["variant"]}
                    size={button.size as ButtonProps["size"]}
                    className="w-full"
                  >
                    {button.title}
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
