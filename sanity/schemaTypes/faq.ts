// schemaTypes/faqType.ts

import { defineField, defineType } from "sanity";
import { FaqDefaults } from "@/components/faq";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "The section tagline text",
      initialValue: FaqDefaults.tagline,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The main heading text",
      initialValue: FaqDefaults.heading,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "button",
      title: "Desktop Button",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: FaqDefaults.button?.title,
        },
        {
          name: "variant",
          title: "Variant",
          type: "string",
          initialValue: FaqDefaults.button?.variant,
          readOnly: true,
        },
      ],
    }),
    defineField({
      name: "buttonMobile",
      title: "Mobile Button",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: FaqDefaults.buttonMobile?.title,
        },
        {
          name: "variant",
          title: "Variant",
          type: "string",
          initialValue: FaqDefaults.buttonMobile?.variant,
          readOnly: true,
        },
      ],
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Question",
              type: "string",
            },
            {
              name: "answer",
              title: "Answer",
              type: "text",
            },
          ],
        },
      ],
      initialValue: FaqDefaults.questions,
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "tagline",
    },
  },
});
