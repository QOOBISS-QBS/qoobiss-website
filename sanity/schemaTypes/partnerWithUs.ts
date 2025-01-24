import { defineField, defineType } from "sanity";

export default defineType({
  name: "partnerWithUs",
  title: "Partner With Us",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "All you need to be a leader in the future landscape",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Explore the unique advantages and features of Qoobiss products and learn how they can help you achieve your business objectives. Reach out to us today to see how our solutions can tailor to your specific needs and drive your success forward.",
    }),
    defineField({
      name: "infoSections",
      title: "Info Sections",
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
              name: "items",
              title: "Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title (Email)",
                      type: "string",
                    }),
                    defineField({
                      name: "office",
                      title: "Office Address Lines",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
      initialValue: [
        {
          title: "Office",
          items: [
            {
              office: [
                "Expo Business Park",
                "54A Av. Popisteanu Street, 1st floor,",
                "Bucharest, Romania",
              ],
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              title: "sales@qoobiss.com",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "form",
      title: "Form Configuration",
      type: "object",
      fields: [
        defineField({
          name: "formsparkId",
          title: "Formspark ID",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "",
        }),
        defineField({
          name: "inputs",
          title: "Form Inputs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "placeholder",
                  title: "Placeholder",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "name",
                  title: "Field Name",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "type",
                  title: "Field Type",
                  type: "string",
                  options: {
                    list: ["text", "email", "tel"],
                  },
                }),
                defineField({
                  name: "required",
                  title: "Required",
                  type: "boolean",
                }),
              ],
            },
          ],
          initialValue: [
            {
              placeholder: "Name*",
              name: "Name",
              type: "text",
              required: true,
            },
            {
              placeholder: "Company email*",
              name: "Email",
              type: "email",
              required: true,
            },
            {
              placeholder: "Phone number*",
              name: "Phone",
              type: "tel",
              required: true,
            },
            {
              placeholder: "Job title",
              name: "Job Title",
              type: "text",
              required: false,
            },
            {
              placeholder: "Country",
              name: "Country",
              type: "text",
              required: false,
            },
            {
              placeholder: "Message",
              name: "Message",
              type: "text",
              required: false,
            },
          ],
        }),
        defineField({
          name: "terms",
          title: "Terms",
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Terms Text",
              type: "string",
              validation: (Rule) => Rule.required(),
              initialValue: "I have read and agree with our ",
            }),
            defineField({
              name: "link",
              title: "Terms Link",
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Link Text",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                  initialValue: "Privacy Policy",
                }),
                defineField({
                  name: "url",
                  title: "Link URL",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                  initialValue: "/privacy-policy",
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: "submitButton",
          title: "Submit Button Text",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "Send",
        }),
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "object",
      fields: [
        defineField({
          name: "main",
          title: "Main Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "background",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
