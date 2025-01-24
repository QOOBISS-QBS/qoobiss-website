import { defineField, defineType } from "sanity";
import { ProductsDefaults } from "@/components/products/products";

export const productsType = defineType({
  name: "products",
  title: "Products",
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
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "unColoredHeadingOne",
              type: "string",
              title: "First Uncolored Heading",
            },
            {
              name: "coloredHeading",
              type: "string",
              title: "Colored Heading",
            },
            {
              name: "unColoredHeadingTwo",
              type: "string",
              title: "Second Uncolored Heading",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
            },
            {
              name: "buttons",
              type: "array",
              title: "Buttons",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      type: "string",
                      title: "Button Text",
                    },
                    {
                      name: "variant",
                      type: "string",
                      title: "Button Variant",
                      initialValue: "indigo",
                    },
                    {
                      name: "href",
                      type: "string",
                      title: "Button Link",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      initialValue: ProductsDefaults.contents,
    }),
    defineField({
      name: "images",
      title: "Section Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
                storeOriginalFilename: true,
                accept: "image/*",
              },
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
      initialValue: ProductsDefaults.images,
    }),
  ],
  preview: {
    select: {
      title: "contents.0.title",
    },
    prepare({ title }) {
      return {
        title: "Products Section",
        subtitle: title || "No products configured",
      };
    },
  },
});
