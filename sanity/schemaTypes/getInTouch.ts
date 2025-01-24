import { defineField, defineType } from "sanity";

export default defineType({
  name: "getInTouch",
  title: "Get In Touch Section",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      description: "The tag text displayed at the top",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "whiteText",
      title: "White Text",
      type: "string",
      description: "The main heading text in white",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "accentText",
      title: "Accent Text",
      type: "string",
      description: "The accent colored text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "tag",
      subtitle: "whiteText",
    },
  },
});
