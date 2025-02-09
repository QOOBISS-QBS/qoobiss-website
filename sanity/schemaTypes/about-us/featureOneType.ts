import { defineField, defineType } from "sanity";
import { FeatureOneDefaults } from "@/components/about-us/FeatureOne";

export const featureOneType = defineType({
  name: "aboutUsFeatureOne",
  title: "About Us Feature One",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: FeatureOneDefaults.tagline,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: FeatureOneDefaults.heading,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "We believe that the future belongs to those who prepare for it today. As your trusted partner, we equip you with advanced tools and innovative solutions necessary to stay ahead in the digital era. With Qoobiss you get to set new standards, ensuring that every tomorrow finds you at the forefront of technological advancement and market leadership",
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "imageMobile",
      title: "Mobile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "tagline",
    },
    prepare({ title, subtitle }) {
      return {
        title: "About Us Feature One Section",
        subtitle: `${subtitle} - ${title}`,
      };
    },
  },
});
