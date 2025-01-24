import { defineField, defineType } from "sanity";
import { HeroDefaults } from "@/components/about-us/Hero";

export const heroType = defineType({
  name: "aboutUsHero",
  title: "About Us Hero",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: HeroDefaults.heading,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
      initialValue: [
        "Our commitment to delivering secure, reliable, and fully automated solutions ensures that our clients experience effortless and swift digital transitions.",
        "At Qoobiss, innovation is at the heart of everything we do, making digital transformation accessible and efficient for businesses around the world.",
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: "About Us Hero Section",
        subtitle: title,
      };
    },
  },
});
