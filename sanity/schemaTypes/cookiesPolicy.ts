import { defineField, defineType } from "sanity";

export const cookiesPolicySchema = defineType({
  name: "cookiesPolicy",
  title: "Cookies Policy",
  type: "document",
  fields: [
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "text",
      description: "The date when the cookies policy was last updated",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "text",
      description:
        "Introductory text explaining the purpose of the cookies policy",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gdprCompliance",
      title: "GDPR Compliance",
      type: "text",
      description:
        "Information about GDPR compliance and data protection measures",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dataTransmission",
      title: "Data Transmission",
      type: "text",
      description: "Details about how data is transmitted and protected",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "googleAnalytics",
      title: "Google Analytics",
      type: "text",
      description:
        "Information about Google Analytics usage and data collection",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thirdPartyTech",
      title: "Third Party Technologies",
      type: "text",
      description: "Details about third-party technologies used on the website",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cookieConsent",
      title: "Cookie Consent",
      type: "text",
      description:
        "Information about how cookie consent is obtained and managed",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "whatAreCookies",
      title: "What Are Cookies",
      type: "array",
      of: [{ type: "text" }],
      description: "Explanation of what cookies are and their purpose",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "howCookiesUsed",
      title: "How Cookies Are Used",
      type: "array",
      of: [{ type: "text" }],
      description:
        "Detailed explanation of how cookies are used on the website",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thirdPartyCookies",
      title: "Third Party Cookies",
      type: "text",
      description: "Information about third-party cookies and their usage",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cookieLifespan",
      title: "Cookie Lifespan",
      type: "text",
      description: "Details about how long cookies are stored",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "controlCookies",
      title: "Control Cookies",
      type: "text",
      description: "Information about how users can control cookie settings",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "browserLinks",
      title: "Browser Links Text",
      type: "text",
      description: "Text introducing browser-specific cookie control links",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "browserControlLinks",
      title: "Browser Control Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Link Text",
              type: "string",
              description: "The displayed text for the browser control link",
            }),
            defineField({
              name: "url",
              title: "Link URL",
              type: "url",
              description:
                "The URL for the browser's cookie control documentation",
            }),
          ],
        },
      ],
      description: "Links to browser-specific cookie control documentation",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "websiteCookies",
      title: "Website Cookies Text",
      type: "text",
      description: "Introduction text for the website's cookie list",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scanReport",
      title: "Scan Report Text",
      type: "text",
      description: "Information about the cookie scan report",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cookieCategories",
      title: "Cookie Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Category Name",
              type: "string",
              description: "Name of the cookie category",
            }),
            defineField({
              name: "count",
              title: "Cookie Count",
              type: "number",
              description: "Number of cookies in this category",
            }),
            defineField({
              name: "description",
              title: "Category Description",
              type: "text",
              description: "Description of this cookie category",
            }),
            defineField({
              name: "cookies",
              title: "Cookies",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Cookie Name",
                      type: "string",
                      description: "Name of the cookie",
                    }),
                    defineField({
                      name: "provider",
                      title: "Cookie Provider",
                      type: "string",
                      description: "Provider/domain of the cookie",
                    }),
                    defineField({
                      name: "type",
                      title: "Cookie Type",
                      type: "string",
                      description: "Type of the cookie",
                    }),
                    defineField({
                      name: "expiry",
                      title: "Cookie Expiry",
                      type: "string",
                      description: "Expiration time of the cookie",
                    }),
                    defineField({
                      name: "description",
                      title: "Cookie Description",
                      type: "text",
                      description:
                        "Detailed description of the cookie's purpose",
                    }),
                  ],
                },
              ],
              description: "List of cookies in this category",
            }),
          ],
        },
      ],
      description: "Categories of cookies used on the website",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "lastUpdated",
      subtitle: "introduction",
    },
    prepare({ title, subtitle }) {
      return {
        title: `Cookies Policy (Last Updated: ${title})`,
        subtitle: subtitle?.slice(0, 50) + "..." || "No introduction set",
      };
    },
  },
});
