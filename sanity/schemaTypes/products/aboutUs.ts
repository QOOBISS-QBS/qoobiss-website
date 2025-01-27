import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUs",
  title: "About Us Section",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "NUMBERS AT A GLANCE",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Experience the power of efficiency",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          initialValue: "About Us Image",
        }),
      ],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Learn More",
        }),
        defineField({
          name: "variant",
          title: "Variant",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "default",
        }),
        defineField({
          name: "size",
          title: "Size",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "lg",
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      initialValue: [
        {
          value: "98%",
          label: "Accuracy Rate",
          description: "High precision in data processing and verification",
        },
        {
          value: "24/7",
          label: "Availability",
          description: "Round-the-clock system operation and support",
        },
        {
          value: "<2s",
          label: "Response Time",
          description: "Quick and efficient processing of requests",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline",
    },
  },
});
