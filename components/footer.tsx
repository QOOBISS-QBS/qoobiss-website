// components/footer.tsx
"use client";

import Link from "next/link";
import { type FooterData, sanitizeFooterData } from "@/types/footer";

export type FooterProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<FooterData>;

export const Footer = (props: FooterProps) => {
  // Sanitize the incoming data
  let sanitizedData = sanitizeFooterData({
    contents: props.contents || FooterDefaults.contents,
    officeAddress: props.officeAddress || FooterDefaults.officeAddress,
    contactInfo: props.contactInfo || FooterDefaults.contactInfo,
    socialLinks: props.socialLinks || FooterDefaults.socialLinks,
    logo: props.logo || FooterDefaults.logo,
    mainHeadingText: props.mainHeadingText || FooterDefaults.mainHeadingText,
    copyrightText: props.copyrightText || FooterDefaults.copyrightText,
    termsUrl: props.termsUrl || FooterDefaults.termsUrl,
    privacyUrl: props.privacyUrl || FooterDefaults.privacyUrl,
    cookiesUrl: props.cookiesUrl || FooterDefaults.cookiesUrl,
  });

  if (!sanitizedData) {
    console.warn("Footer data validation failed, falling back to defaults");
    sanitizedData = sanitizeFooterData(FooterDefaults);
    if (!sanitizedData) {
      console.error("Critical: Default footer data is invalid");
      return null;
    }
  }

  const {
    contents,
    officeAddress,
    contactInfo,
    socialLinks,
    logo,
    mainHeadingText,
    copyrightText,
    termsUrl,
    privacyUrl,
    cookiesUrl,
  } = sanitizedData;

  return (
    <footer className="pb-4 lg:pb-0 pt-20 lg:pt-28 bg-light-background relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_1fr] lg:mb-20">
          <Link href="/">
            <img
              src={logo?.asset?.url || "/footer-qoobiss.svg"}
              alt={logo?.alt || "qoobiss logo"}
            />
          </Link>
          <h1 className="text-4xl lg:text-[80px] text-light-foreground font-normal lg:font-light my-8 lg:my-0">
            {mainHeadingText}
          </h1>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-5">
          {contents.map((content, index) => (
            <div key={index}>
              <h2 className="text-md xxl:text-2xl text-light-foreground">
                {content.title}
              </h2>
              {content.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-light-chapeau text-sm mt-2.5 block"
                >
                  {link.subTitle}
                </a>
              ))}
            </div>
          ))}

          <div>
            <h2 className="text-md xxl:text-2xl text-light-foreground">
              Office
            </h2>
            <div className="text-light-chapeau text-sm mt-2.5">
              {officeAddress?.map((line, index) => <p key={index}>{line}</p>)}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="text-md xxl:text-2xl text-light-foreground">
              Contact
            </h2>
            <a
              href={`mailto:${contactInfo?.email}`}
              className="text-light-chapeau text-sm"
            >
              {contactInfo?.email}
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <h2 className="text-md xxl:text-2xl xxl:leading-[1] text-light-foreground">
              Find us on
            </h2>
            {socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-light-chapeau text-sm"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-start self-stretch lg:pl-[406px] pt-8 lg:pt-20">
          <div className="border-t border-dark-stroke pt-8 md:gap-[46px] flex md:flex-row flex-col items-start lg:items-end lg:py-4 self-stretch">
            <a href="#" className="text-[#4F4E7A] text-xs">
              {copyrightText}
            </a>
            <a href={termsUrl?.url} className="text-[#4F4E7A] text-xs">
              {termsUrl?.title}
            </a>
            <a href={privacyUrl?.url} className="text-[#4F4E7A] text-xs">
              {privacyUrl?.title}
            </a>
            <a href={cookiesUrl?.url} className="text-[#4F4E7A] text-xs">
              {cookiesUrl?.title}
            </a>
          </div>
        </div>
      </div>
      <img
        src="/footer-ellipse.png"
        alt="Footer's ellipse"
        className="size-full absolute top-0 -z-10 lg:block hidden pointer-events-none"
        loading="lazy"
      />
      <img
        src="/footer-ellipse-mobile.png"
        alt="Footer's ellipse"
        className="size-full absolute top-0 -z-10 lg:hidden pointer-events-none"
        loading="lazy"
      />
    </footer>
  );
};

export const FooterDefaults: FooterProps = {
  contents: [
    {
      title: "Our Solutions",
      links: [
        { url: "/products", subTitle: "All products" },
        { url: "/products/origin", subTitle: "Origin" },
        { url: "/products/ontrace", subTitle: "Ontrace" },
        { url: "/products/omnicheck", subTitle: "Omnicheck" },
      ],
    },
    {
      title: "Company",
      links: [
        { url: "/about-us", subTitle: "About us" },
        { url: "/security-and-compliance", subTitle: "Security & Compliance" },
        { url: "/partner-with-us", subTitle: "Partner with us" },
      ],
    },
  ],
  officeAddress: [
    "Expo Business Park",
    "54A Av. Popisteanu Street, 1st floor",
    "Bucharest, Romania",
  ],
  contactInfo: {
    email: "sales@qoobiss.com ",
  },
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/qoobiss/" },
  ],
  logo: {
    asset: { url: "/footer-qoobiss.svg" },
    alt: "Qoobiss Logo",
  },
  mainHeadingText: "Innovation is bliss.",
  copyrightText: "Copyright © All rights reserved 2024",
  termsUrl: { url: "/terms-and-conditions", title: "Terms And Conditions" },
  privacyUrl: { url: "/privacy-policy", title: "Privacy Policy" },
  cookiesUrl: { url: "/cookies-policy", title: "Cookies Policy" },
};

Footer.displayName = "Footer";
