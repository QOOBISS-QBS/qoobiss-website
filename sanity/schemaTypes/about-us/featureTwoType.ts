import { defineField, defineType } from "sanity";
import { FeatureTwoDefaults } from "@/components/about-us/FeatureTwo";

export const featureTwoType = defineType({
  name: "aboutUsFeatureTwo",
  title: "About Us Feature Two",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: FeatureTwoDefaults.tagline,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: FeatureTwoDefaults.heading,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue: FeatureTwoDefaults.description,
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
      initialValue: FeatureTwoDefaults.features?.map(
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
    prepare({ title, subtitle }) {
      return {
        title: "About Us Feature Two Section",
        subtitle: `${subtitle} - ${title}`,
      };
    },
  },
});
