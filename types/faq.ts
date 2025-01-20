// types/faq.ts

import { ButtonProps } from "@/components/ui/button";

export interface Question {
  title: string;
  answer: string;
}

export interface FaqData {
  tagline: string;
  heading: string;
  button: ButtonProps;
  buttonMobile: ButtonProps;
  questions: Question[];
}

// Type guards
export function isQuestion(question: unknown): question is Question {
  if (!question || typeof question !== "object") return false;

  const candidate = question as Question;
  return (
    typeof candidate.title === "string" &&
    typeof candidate.answer === "string" &&
    candidate.title.length > 0 &&
    candidate.answer.length > 0
  );
}

export function isFaqData(data: unknown): data is FaqData {
  if (!data || typeof data !== "object") return false;

  const candidate = data as FaqData;
  return (
    typeof candidate.tagline === "string" &&
    typeof candidate.heading === "string" &&
    typeof candidate.button === "object" &&
    typeof candidate.button.title === "string" &&
    typeof candidate.button.variant === "string" &&
    typeof candidate.buttonMobile === "object" &&
    typeof candidate.buttonMobile.title === "string" &&
    typeof candidate.buttonMobile.variant === "string" &&
    Array.isArray(candidate.questions) &&
    candidate.questions.every(isQuestion)
  );
}

// Sanitizers
export function sanitizeQuestion(question: unknown): Question | null {
  if (!isQuestion(question)) return null;

  return {
    title: question.title,
    answer: question.answer,
  };
}

export function sanitizeFaqData(data: unknown): FaqData | null {
  if (!isFaqData(data)) return null;

  return {
    tagline: data.tagline,
    heading: data.heading,
    button: {
      title: data.button.title,
      variant: data.button.variant,
    },
    buttonMobile: {
      title: data.buttonMobile.title,
      variant: data.buttonMobile.variant,
    },
    questions: data.questions
      .map(sanitizeQuestion)
      .filter((question): question is Question => question !== null),
  };
}
