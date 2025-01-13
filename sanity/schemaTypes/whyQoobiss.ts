// schemaTypes/whyQoobissType.ts

import { defineField, defineType } from "sanity";
import { WhyQoobissDefaults } from "@/components/why-qoobiss";

export const whyQoobissType = defineType({
  name: "whyQoobiss",
  title: "Why Qoobiss Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The section heading (appears in purple)",
      initialValue: WhyQoobissDefaults.heading,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descriptionFirstPart",
      title: "Description First Part",
      type: "string",
      description: "The first part of the main description",
      initialValue: WhyQoobissDefaults.descriptionFirstPart,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coloredText",
      title: "Colored Text",
      type: "string",
      description: "The highlighted text that appears in accent color",
      initialValue: WhyQoobissDefaults.coloredText,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "descriptionFirstPart",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No heading set",
        subtitle: subtitle || "No description set",
      };
    },
  },
});
