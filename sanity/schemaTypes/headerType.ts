// schemaTypes/headerType.ts

import { defineField, defineType } from "sanity";
import { HeaderDefaults } from "@/components/header";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "coloredHeading",
      title: "Colored Heading",
      type: "string",
      description: "The colored part of the heading",
      initialValue: HeaderDefaults.coloredHeading,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The main heading text",
      initialValue: HeaderDefaults.heading,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "The header description",
      initialValue: HeaderDefaults.description,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "coloredHeading",
      subtitle: "heading",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No colored heading set",
        subtitle: subtitle || "No heading set",
      };
    },
  },
});
