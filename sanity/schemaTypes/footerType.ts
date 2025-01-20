// schemaTypes/footerType.ts

import { defineField, defineType } from "sanity";
import { FooterDefaults } from "@/components/footer";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "contents",
      title: "Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            {
              name: "links",
              type: "array",
              title: "Links",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "url", type: "string", title: "URL" },
                    { name: "subTitle", type: "string", title: "Subtitle" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      initialValue: FooterDefaults.contents,
    }),
    defineField({
      name: "officeAddress",
      title: "Office Address",
      type: "array",
      of: [{ type: "string" }],
      initialValue: FooterDefaults.officeAddress,
    }),
    defineField({
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [{ name: "email", type: "string", title: "Email" }],
      initialValue: FooterDefaults.contactInfo as unknown as Record<
        string,
        unknown
      >,
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "url", type: "string", title: "URL" },
          ],
        },
      ],
      initialValue: FooterDefaults.socialLinks,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        storeOriginalFilename: true,
        accept: "image/svg+xml,image/*",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          initialValue: FooterDefaults.logo?.alt,
        },
      ],
    }),
    defineField({
      name: "mainHeadingText",
      title: "Main Heading Text",
      type: "string",
      initialValue: FooterDefaults.mainHeadingText,
    }),
    defineField({
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      initialValue: FooterDefaults.copyrightText,
    }),
    defineField({
      name: "termsUrl",
      title: "Terms URL",
      type: "object",
      fields: [
        { name: "url", type: "string", title: "URL" },
        { name: "title", type: "string", title: "Title" },
      ],
      initialValue: FooterDefaults.termsUrl as unknown as Record<
        string,
        unknown
      >,
    }),
    defineField({
      name: "privacyUrl",
      title: "Privacy URL",
      type: "object",
      fields: [
        { name: "url", type: "string", title: "URL" },
        { name: "title", type: "string", title: "Title" },
      ],
      initialValue: FooterDefaults.privacyUrl as unknown as Record<
        string,
        unknown
      >,
    }),
    defineField({
      name: "cookiesUrl",
      title: "Cookies URL",
      type: "object",
      fields: [
        { name: "url", type: "string", title: "URL" },
        { name: "title", type: "string", title: "Title" },
      ],
      initialValue: FooterDefaults.cookiesUrl as unknown as Record<
        string,
        unknown
      >,
    }),
  ],
  preview: {
    select: {
      title: "mainHeadingText",
      subtitle: "copyrightText",
    },
    prepare({ title, subtitle }) {
      return {
        title: "Footer Configuration",
        subtitle: `${title || "No heading set"} | ${subtitle || "No copyright text set"}`,
      };
    },
  },
});
