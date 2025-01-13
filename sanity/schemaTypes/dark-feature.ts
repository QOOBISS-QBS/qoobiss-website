import { defineField, defineType } from "sanity";
import { DarkFeatureDefaults } from "@/components/dark-feature";

export const darkFeatureType = defineType({
  name: "darkFeature",
  title: "Dark Feature",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: DarkFeatureDefaults.heading,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue: DarkFeatureDefaults.description,
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
          initialValue: DarkFeatureDefaults.button.title,
        },
        {
          name: "variant",
          title: "Variant",
          type: "string",
          initialValue: DarkFeatureDefaults.button.variant,
          readOnly: true,
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Seamless", value: "seamless" },
                  { title: "Scalability", value: "scalability" },
                  { title: "Workflow", value: "workflow" },
                  { title: "Universal", value: "universal" },
                ],
              },
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
      initialValue: DarkFeatureDefaults.features,
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "descriptionFirstPart",
    },
    prepare() {
      return {
        title: "Dark Feature Section",
        subtitle: "Adapt your business",
      };
    },
  },
});
