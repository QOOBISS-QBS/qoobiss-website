import { defineField, defineType } from "sanity";
import { DarkFeatureDefaults } from "@/components/products/ontrace/DarkFeature";
import { DarkFeature2Defaults } from "@/components/products/ontrace/DarkFeature2";
import { LightFeatureDefaults } from "@/components/products/ontrace/LightFeature";

export const ontraceFeaturesType = defineType({
  name: "ontraceFeatures",
  title: "OnTrace Features",
  type: "document",
  fields: [
    defineField({
      name: "darkFeature",
      title: "Dark Feature Section",
      type: "object",
      fields: [
        { name: "heading", type: "string", title: "Heading" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "button",
          type: "object",
          title: "Button",
          fields: [
            { name: "title", type: "string", title: "Button Text" },
            { name: "variant", type: "string", title: "Button Variant" },
          ],
        },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "object",
                  fields: [
                    { name: "src", type: "string", title: "Icon Source" },
                    { name: "alt", type: "string", title: "Icon Alt Text" },
                  ],
                },
                { name: "heading", type: "string", title: "Feature Heading" },
                {
                  name: "description",
                  type: "text",
                  title: "Feature Description",
                },
              ],
            },
          ],
        },
      ],
      initialValue: DarkFeatureDefaults,
    }),
    defineField({
      name: "darkFeature2",
      title: "Second Dark Feature Section",
      type: "object",
      fields: [
        { name: "tagline", type: "string", title: "Tagline" },
        { name: "heading", type: "string", title: "Heading" },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "icon",
                  type: "object",
                  fields: [
                    { name: "src", type: "string", title: "Icon Source" },
                    { name: "alt", type: "string", title: "Icon Alt Text" },
                  ],
                },
                { name: "heading", type: "string", title: "Feature Heading" },
                {
                  name: "description",
                  type: "text",
                  title: "Feature Description",
                },
              ],
            },
          ],
        },
      ],
      initialValue: DarkFeature2Defaults,
    }),
    defineField({
      name: "lightFeature",
      title: "Light Feature Section",
      type: "object",
      fields: [
        { name: "tagline", type: "string", title: "Tagline" },
        { name: "heading", type: "string", title: "Heading" },
        { name: "description", type: "text", title: "Description" },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  type: "object",
                  fields: [
                    { name: "src", type: "string", title: "Image Source" },
                    { name: "alt", type: "string", title: "Image Alt Text" },
                  ],
                },
                { name: "heading", type: "string", title: "Feature Heading" },
                {
                  name: "description",
                  type: "text",
                  title: "Feature Description",
                },
              ],
            },
          ],
        },
      ],
      initialValue: LightFeatureDefaults,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "OnTrace Features Content",
      };
    },
  },
});
