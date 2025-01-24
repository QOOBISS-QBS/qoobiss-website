// /schemaTypes/navbarType.ts

import { defineField, defineType } from "sanity";

const defaultNavigationItems = [
  {
    title: "Our Solutions",
    links: [
      { title: "All products", href: "/products" },
      { title: "Origin", href: "/products/origin" },
      { title: "Ontrace", href: "/products/ontrace" },
      { title: "Omnicheck", href: "/products/omnicheck" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "/about-us" },
      { title: "Security & Compliance", href: "/security-and-compliance" },
      { title: "Partner with us", href: "/partner-with-us" },
    ],
  },
];

const defaultButton = {
  title: "Get in touch",
  href: "/partner-with-us",
};

export const navbarType = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
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
          initialValue: "Company logo",
        },
      ],
    }),
    defineField({
      name: "navigationItems",
      title: "Navigation Items",
      type: "array",
      initialValue: defaultNavigationItems,
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "href",
              type: "string",
              title: "Link (optional)",
            },
            {
              name: "links",
              type: "array",
              title: "Dropdown Links",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      type: "string",
                      title: "Title",
                    },
                    {
                      name: "href",
                      type: "string",
                      title: "Link",
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "title",
              href: "href",
            },
            prepare({ title, href }) {
              return {
                title: title,
                subtitle: href || "No direct link",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "button",
      title: "CTA Button",
      type: "object",
      initialValue: defaultButton,
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "href",
          type: "string",
          title: "Link",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "navigationItems.0.title",
      buttonTitle: "button.title",
      media: "logo",
    },
    prepare({ title, buttonTitle, media }) {
      return {
        title: "Navbar Configuration",
        subtitle: `Menu: ${title || "Not set"} | CTA: ${buttonTitle || "Not set"}`,
        media: media,
      };
    },
  },
});
