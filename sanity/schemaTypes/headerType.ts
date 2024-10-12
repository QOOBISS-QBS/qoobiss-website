import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "headingFirstPart",
      title: "Heading First Part",
      type: "string",
    }),
    defineField({
      name: "coloredHeading",
      title: "Colored Heading",
      type: "string",
    }),
    defineField({
      name: "headingLastPart",
      title: "Heading Last Part",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
