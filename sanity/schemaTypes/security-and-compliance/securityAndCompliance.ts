import { defineField, defineType } from "sanity";

export default defineType({
  name: "securityAndCompliance",
  title: "Security and Compliance",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "isoImage",
              title: "ISO Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            }),
            defineField({
              name: "shortDescription",
              title: "Short Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "badge",
              title: "Badge",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "fullDescription",
              title: "Full Description",
              type: "text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "validUntil",
              title: "Valid Until",
              type: "string",
              description:
                "Format: YYYY-MM (e.g., 2025-03). Leave empty if N/A",
            }),
          ],
        },
      ],
    }),
  ],
});
