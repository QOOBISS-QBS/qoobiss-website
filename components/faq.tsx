"use client";

import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Plus } from "lucide-react";
import { StaggeredHeading } from "./ui/word-curtain";
import Link from "next/link";
import { type FaqData, sanitizeFaqData } from "@/types/faq";

export type FaqProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<FaqData>;

export const Faq = (props: FaqProps) => {
  // Sanitize the incoming data
  const sanitizedData = sanitizeFaqData({
    tagline: props.tagline || FaqDefaults.tagline,
    heading: props.heading || FaqDefaults.heading,
    button: props.button || FaqDefaults.button,
    buttonMobile: props.buttonMobile || FaqDefaults.buttonMobile,
    questions: props.questions || FaqDefaults.questions,
  });

  if (!sanitizedData) {
    console.error("Invalid FAQ data provided");
    return null;
  }

  const { tagline, heading, button, buttonMobile, questions } = sanitizedData;

  return (
    <section className="pt-20 lg:pt-40 relative">
      <div className="container container-padding">
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
          <div>
            <p className="font-semibold mb-6 uppercase text-xl leading-[1.3] text-electric-violet">
              {tagline}
            </p>
            <StaggeredHeading className="text-5xl font-light lg:mb-6 lg:text-8xl">
              {heading}
            </StaggeredHeading>
            <div className="lg:mt-8 lg:flex hidden">
              <Link href="https://calendly.com/qoobiss/30min">
                <Button {...button}>{button.title}</Button>
              </Link>
            </div>
          </div>
          <Accordion type="multiple">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  icon={
                    <Plus className="size-7 shrink-0 p-1 transition-transform duration-300 lg:size-8 text-electric-violet" />
                  }
                  className="lg:py-5 text-lg lg:text-2xl [&[data-state=open]>svg]:rotate-45 font-normal text-light-foreground text-left"
                >
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="lg:pb-6 text-light-chapeau text-sm lg:text-lg leading-[1.3]">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="pt-12 lg:hidden text-center">
          <Link href="https://calendly.com/qoobiss/30min">
            <Button {...buttonMobile}>{buttonMobile.title}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const FaqDefaults: FaqData = {
  tagline: "Discover more",
  heading: "What would you like to know?",
  button: {
    title: "Book a demo",
    variant: "light-default",
  },
  questions: [
    {
      title:
        "How quickly can we integrate Qoobiss solutions into our existing systems?",
      answer:
        "Qoobiss solutions are designed for easy and rapid integration, seamlessly fitting into your existing workflows with minimal disruption. You can expect to have our systems fully operational in days, not months, ensuring a hassle-free setup without extensive development efforts.",
    },
    {
      title: "What makes Qoobiss solutions essential for modern businesses?",
      answer:
        "Automating your processes with Qoobiss enhances efficiency, reduces operational costs, and minimizes human error. Automation streamlines your business operations, allowing your team to focus on strategic tasks and innovation.",
    },
    {
      title: "Can Qoobiss solutions scale with my business growth?",
      answer:
        "Absolutely. Our solutions are built to scale seamlessly as your business grows. They can accommodate an increasing influx of customers effortlessly, without the need for additional resources, ensuring that your capacity to serve new markets and customer segments expands smoothly.",
    },
    {
      title:
        "What are the immediate cost benefits of implementing Qoobiss solutions?",
      answer:
        "Implementing Qoobiss solutions leads to immediate cost savings by significantly reducing manual tasks and associated operational expenses. This streamlined approach enhances productivity and efficiency, directly impacting your bottom line positively.",
    },
    {
      title:
        "How does Qoobiss ensure compliance and fraud prevention in customer identification?",
      answer:
        "Our solutions integrate advanced AI technologies to bring all customer identification processes into a fully digital system. This not only reduces the development effort but also ensures stringent compliance and effective fraud prevention, achieving 100% automation in identity verification.",
    },
  ],
  buttonMobile: {
    title: "Book a demo",
    variant: "light-default",
  },
};

Faq.displayName = "Faq";
