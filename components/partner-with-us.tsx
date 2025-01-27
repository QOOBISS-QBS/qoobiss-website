/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import { StaggeredHeading } from "@/components/helpers/word-curtain";
import Link from "next/link";
import { GetInTouch } from "./GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";

// Types remain the same as in original file
type InputField = {
  placeholder: string;
  type?: "number" | "search" | "text" | "email" | "password" | "tel";
  name: string;
  required?: boolean;
};

type Items = {
  title?: string;
  office?: string[];
};

type InfoSection = {
  title: string;
  items: Items[];
};

type ImageConfig = {
  src: string;
  alt: string;
};

type Props = {
  heading: string;
  description: string;
  infoSections: InfoSection[];
  form: {
    inputs: InputField[];
    terms: {
      title: string;
      link: {
        text: string;
        url: string;
      };
    };
    submitButton: string;
    formsparkId: string;
  };
  images: {
    main: ImageConfig;
    background: ImageConfig;
  };
  getInTouchData?: any; // Add type based on your GetInTouch component props
};

export type PartnerWithUsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

// Separate data fetching into a new component
export async function PartnerWithUsWrapper(props: PartnerWithUsProps) {
  const [getInTouchData] = await Promise.all([
    sanityFetch({
      query: GET_IN_TOUCH_QUERY,
    }),
  ]);

  return <PartnerWithUs {...props} getInTouchData={getInTouchData} />;
}

// Main component (no longer async)
export const PartnerWithUs = (props: Partial<Props>) => {
  const {
    heading,
    description,
    infoSections,
    form: formProps,
    getInTouchData,
  } = {
    ...PartnerWithUsDefaults,
    ...props,
  } as Props;

  const form = {
    ...formProps,
    formsparkId: process.env.NEXT_PUBLIC_FORMSPARK_ID || "",
  };

  // Window size for confetti
  const { width, height } = useWindowSize();

  // FormSpark setup
  const [submit, submitting] = useFormspark({
    formId: form.formsparkId,
  });

  // Toast setup
  const { toast } = useToast();

  // Form and celebration states
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Check if required fields are filled
  const areRequiredFieldsFilled = useMemo(() => {
    const requiredFields = form.inputs.filter((input) => input.required);
    return requiredFields.every(
      (field) => formData[field.name] && formData[field.name].trim() !== ""
    );
  }, [formData, form.inputs]);

  // Handle successful submission celebration
  const celebrate = () => {
    setShowConfetti(true);
    toast({
      title: "Success!",
      description: "Thanks for reaching out! We'll get back to you soon.",
      className: "bg-white text-light-foreground border-none",
    });

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please agree to the terms before submitting.",
      });
      return;
    }

    if (!areRequiredFieldsFilled) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      return;
    }

    try {
      await submit(formData);
      setFormData({});
      setAgreedToTerms(false);
      celebrate();
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "There was a problem sending your message. Please try again.",
      });
    }
  };

  return (
    <section className="pt-20 lg:pt-28 relative">
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
      <div className="container container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
          <div>
            <StaggeredHeading className="self-stretch text-4xl text-light-foreground">
              {heading}
            </StaggeredHeading>
            <p className="lg:text-lg text-light-chapeau mt-4">{description}</p>
            <div className="flex flex-col items-start gap-10 self-stretch mt-12">
              {infoSections.map((section, index) => (
                <div key={index} className="flex flex-col items-start gap-2.5">
                  <StaggeredHeading className="text-2xl text-light-foreground">
                    {section.title}
                  </StaggeredHeading>
                  <div className="flex flex-col">
                    {section.items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-light-chapeau text-sm lg:text-base flex flex-col"
                      >
                        {item.title && (
                          <span className="font-semibold">
                            <a href={`mailto:${item.title}`}>{item.title}</a>
                          </span>
                        )}
                        <span className="flex flex-col">
                          {item?.office?.map((office, officeIndex) => (
                            <span key={officeIndex}>{office}</span>
                          ))}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <div className="flex pt-20 lg:pt-6 flex-col items-start gap-2.5 self-stretch">
              {form.inputs.map((input, index) => (
                <Input
                  key={index}
                  placeholder={input.placeholder}
                  type={input.type || "text"}
                  name={input.name}
                  value={formData[input.name] || ""}
                  onChange={handleInputChange}
                  required={input.required || false}
                />
              ))}
            </div>

            <div className="flex items-center gap-5 py-3.5">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  setAgreedToTerms(checked as boolean)
                }
              />
              <label htmlFor="terms" className="text-sm text-light-chapeau">
                {form.terms.title}
                <Link href={form.terms.link.url} className="underline">
                  {form.terms.link.text}
                </Link>
              </label>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <Button
                type="submit"
                variant="light-default"
                disabled={
                  submitting || !agreedToTerms || !areRequiredFieldsFilled
                }
              >
                {submitting ? "Sending..." : form.submitButton}
              </Button>
            </div>
          </form>
        </div>
      </div>
      {getInTouchData && <GetInTouch {...getInTouchData} />}
      <div className="absolute -z-10 inset-0 pointer-events-none size-full lg:block opacity-50 hidden">
        <img
          src="/banner-ellipse.png"
          alt="Banner ellipse"
          className="object-cover"
        />
      </div>
      <div className="absolute -z-10 inset-0 pointer-events-none lg:hidden">
        <img
          src="/home-ellipse.png"
          alt="Banner ellipse"
          className="object-cover w-full"
        />
      </div>
    </section>
  );
};

export const PartnerWithUsDefaults: PartnerWithUsProps = {
  heading: "All you need to be a leader in the future landscape",
  description:
    "Explore the unique advantages and features of Qoobiss products and learn how they can help you achieve your business objectives. Reach out to us today to see how our solutions can tailor to your specific needs and drive your success forward.",
  infoSections: [
    {
      title: "Office",
      items: [
        {
          office: [
            "Expo Business Park",
            "54A Av. Popisteanu Street, 1st floor,",
            "Bucharest, Romania",
          ],
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          title: "sales@qoobiss.com",
        },
      ],
    },
  ],
  form: {
    formsparkId: process.env.NEXT_PUBLIC_FORMSPARK_ID || "",
    inputs: [
      { placeholder: "Name*", name: "Name", required: true },
      {
        placeholder: "Company email*",
        name: "Email",
        type: "email",
        required: true,
      },
      {
        placeholder: "Phone number*",
        name: "Phone",
        type: "tel",
        required: true,
      },
      { placeholder: "Job title", name: "Job Title", required: false },
      { placeholder: "Country", name: "Country", required: false },
      { placeholder: "Message", name: "Message", required: false },
    ],
    terms: {
      title: "I have read and agree with our ",
      link: {
        text: "Privacy Policy",
        url: "/privacy-policy",
      },
    },
    submitButton: "Send",
  },
  images: {
    main: {
      src: "/contact-image.png",
      alt: "Contact image",
    },
    background: {
      src: "/contact-ellipse.png",
      alt: "Contact ellipse",
    },
  },
};
