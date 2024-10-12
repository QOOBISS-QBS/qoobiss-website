import { defineField, defineType } from "sanity";

export const navbarType = defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "url", type: "string", title: "URL" },
          ],
        },
      ],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "object",
      fields: [
        { name: "title", type: "string", title: "Title" },
        { name: "url", type: "string", title: "URL" },
        {
          name: "variant",
          type: "string",
          title: "Variant",
          options: {
            list: ["primary-dark", "dark-default", "light-default", "indigo"],
          },
        },
        {
          name: "size",
          type: "string",
          title: "Size",
          options: {
            list: ["default", "primary", "lg", "filter", "indigo", "icon"],
          },
        },
      ],
    }),
  ],
});
