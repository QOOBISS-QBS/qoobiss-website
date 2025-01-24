import { defineField, defineType } from "sanity";
import { TeamDefaults } from "@/components/about-us/Team";

export const teamType = defineType({
  name: "aboutUsTeam",
  title: "About Us Team",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: TeamDefaults.tagline,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: TeamDefaults.heading,
    }),
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Member Image",
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
            },
            {
              name: "name",
              title: "Member Name",
              type: "string",
            },
            {
              name: "jobTitle",
              title: "Job Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
          ],
        },
      ],
      initialValue: TeamDefaults.teamMembers,
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "tagline",
    },
    prepare({ title, subtitle }) {
      return {
        title: "About Us Team Section",
        subtitle: `${subtitle} - ${title}`,
      };
    },
  },
});
