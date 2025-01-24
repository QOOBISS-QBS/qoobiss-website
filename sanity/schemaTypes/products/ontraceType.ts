import { defineField, defineType } from "sanity";
import { BannerDefaults } from "@/components/products/ontrace/Banner";
import { HeroDefaults } from "@/components/products/ontrace/Hero";
import { OurSolutionDefaults } from "@/components/products/ontrace/OurSolution";

export const ontraceType = defineType({
  name: "ontrace",
  title: "OnTrace Page",
  type: "document",
  fields: [
    defineField({
      name: "banner",
      title: "Banner Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        {
          name: "unColoredHeadingOne",
          type: "string",
          title: "First Uncolored Heading",
        },
        { name: "coloredHeading", type: "string", title: "Colored Heading" },
        {
          name: "unColoredHeadingTwo",
          type: "string",
          title: "Second Uncolored Heading",
        },
        { name: "description", type: "text", title: "Description" },
        {
          name: "button",
          type: "object",
          title: "Button",
          fields: [
            { name: "title", type: "string", title: "Button Text" },
            { name: "variant", type: "string", title: "Button Variant" },
            { name: "size", type: "string", title: "Button Size" },
          ],
        },
      ],
      initialValue: BannerDefaults,
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "description", type: "text", title: "Description" },
      ],
      initialValue: HeroDefaults,
    }),
    defineField({
      name: "ourSolution",
      title: "Our Solution Section",
      type: "object",
      fields: [
        { name: "heading", type: "string", title: "Heading" },
        {
          name: "descriptionFirstPart",
          type: "string",
          title: "Description First Part",
        },
        { name: "coloredText", type: "string", title: "Colored Text" },
        {
          name: "descriptionSecondPart",
          type: "string",
          title: "Description Second Part",
        },
      ],
      initialValue: OurSolutionDefaults,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "OnTrace Page Content",
      };
    },
  },
});
