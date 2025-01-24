import { defineField, defineType } from "sanity";
import { SecurityAndComplianceDefaults } from "@/components/security-and-compliance";

export const securityAndComplianceType = defineType({
  name: "securityAndCompliance",
  title: "Security and Compliance",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: SecurityAndComplianceDefaults.heading,
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
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
                  title: "Alternative text",
                  description: "Important for SEO and accessibility.",
                },
              ],
            },
            {
              name: "shortDescription",
              title: "Short Description",
              type: "string",
            },
            {
              name: "badge",
              title: "Badge Text",
              type: "string",
            },
            {
              name: "fullDescription",
              title: "Full Description",
              type: "text",
            },
            {
              name: "validUntil",
              title: "Valid Until (YYYY-MM)",
              type: "string",
            },
          ],
        },
      ],
      initialValue: SecurityAndComplianceDefaults.certifications,
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare() {
      return {
        title: "Security and Compliance Section",
      };
    },
  },
});
