// schemaTypes/lightFeatureType.ts

import { defineField, defineType } from "sanity";
import { LightFeatureDefaults } from "@/components/light-feature";

export const lightFeatureType = defineType({
  name: "lightFeature",
  title: "Light Feature",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: LightFeatureDefaults.tagline,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: LightFeatureDefaults.heading,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue: LightFeatureDefaults.description,
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: LightFeatureDefaults.button.title,
        },
        {
          name: "variant",
          title: "Variant",
          type: "string",
          initialValue: LightFeatureDefaults.button.variant,
          readOnly: true,
        },
      ],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Number",
              type: "string",
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
      initialValue: LightFeatureDefaults.sections.map(
        ({ number, heading, description }) => ({
          number,
          heading,
          description,
        })
      ),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "tagline",
    },
    prepare() {
      return {
        title: "Light Feature",
        subtitle: "Unlock New Business Growth Opportunities",
      };
    },
  },
});
