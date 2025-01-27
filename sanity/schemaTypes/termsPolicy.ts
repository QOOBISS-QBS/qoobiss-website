import { defineField, defineType } from "sanity";

export const termsAndConditionsSchema = defineType({
  name: "termsPolicy",
  title: "Terms and Conditions",
  type: "document",
  fields: [
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "text",
      description: "The date when the terms and conditions were last updated",
      validation: (Rule) => Rule.required(),
      initialValue: "02.12.2024",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [{ type: "string" }],
      description: "Introductory points about the terms and conditions",
      validation: (Rule) => Rule.required(),
      initialValue: [
        "This document (together with all the documents mentioned in it) establishes the terms and conditions governing the use of this website, https://qoobiss.com/ (hereinafter the `Website`).",
        "The purpose of the Website is to present and promote a personalized KYC (Know Your Customer) solution for digital identity verification, used for the rapid registration of customers in various industries, provided by the company CREDIMATIC NETWORK S.R.L. and contracting, through the Website, with potential customers interested in these services.",
        "Please read these Terms and Conditions, Cookie Policy, and Privacy Policy before using the Website. By accessing and using the Website, you expressly acknowledge the mandatory nature of these documents and undertake to comply with them.",
      ],
    }),
    defineField({
      name: "companyInfo",
      title: "Company Information",
      type: "object",
      description: "Company details and contact information",
      fields: [
        defineField({
          name: "name",
          title: "Company Name",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "S.C. CREDIMATIC NETWORK S.R.L.",
        }),
        defineField({
          name: "contacts",
          title: "Contact Details",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required(),
          initialValue: [
            "Registered office address: 54A Av. Popisteanu Street, Expo Business Park, 1st floor, Bucharest, Romania.",
            "Email address: dpo@qoobiss.com",
          ],
        }),
      ],
    }),
    defineField({
      name: "intellectualProperty",
      title: "Intellectual Property",
      type: "array",
      of: [{ type: "string" }],
      description: "Information about intellectual property rights",
      validation: (Rule) => Rule.required(),
      initialValue: [
        "The company is the exclusive holder of all intellectual property rights related to the content of the Website, including but not limited to: articles, text, photos, illustrations, music, audio and video clips, trademarks, logos, and patterns.",
        "Visitors to the Website can access, download, and print materials published on the Website for personal use only and for non-commercial purposes. As a result of any of these actions, visitors to the Website do not acquire or are not granted any rights, titles, or legitimate interests in the materials published on the Website.",
      ],
    }),
    defineField({
      name: "terms",
      title: "Terms",
      type: "array",
      of: [{ type: "string" }],
      description: "Definitions of key terms used in the document",
      validation: (Rule) => Rule.required(),
      initialValue: [
        "Seller/Company – CREDIMATIC NETWORK S.R.L.",
        "Visitor – any individual/legal person interested in the personalized KYC solution for digital identity verification used for the rapid registration of customers in various industries offered by the Company and who has access to the content of the Site.",
        "Client – any legal person who has access to the services offered by the Company through the site, by any means of communication provided by the Company.",
        "Site – the online store hosted at the web address https://qoobiss.com/",
        "Request – a form of communication between the Company and the Client through the Site.",
        "Commercial Communications / Newsletter – any type of message sent containing general and thematic information.",
      ],
    }),
    defineField({
      name: "websiteUse",
      title: "Use of the Website",
      type: "text",
      description: "Rules and conditions for using the website",
      validation: (Rule) => Rule.required(),
      initialValue:
        "By using the Website, you agree to not make any false or fraudulent requests. In case we have reasonable grounds to believe that you have made such a request, we have the right not to respond to it and to inform the competent authorities accordingly.",
    }),
    defineField({
      name: "liability",
      title: "Limitation of Liability",
      type: "text",
      description: "Information about company liability and limitations",
      validation: (Rule) => Rule.required(),
      initialValue:
        "The Company does not assume responsibility for any damages that the Website visitor, potential Client, or any other third party may suffer as a result of using the Website in any way or for any purpose or as a result of the Company's compliance with any of its legal and/or contractual obligations.",
    }),
    defineField({
      name: "modifications",
      title: "Right to Modify Terms",
      type: "text",
      description: "Information about terms modification rights",
      validation: (Rule) => Rule.required(),
      initialValue:
        "We have the right to revise and modify the Terms and Conditions occasionally and at our discretion. You are responsible for reading the Terms and Conditions, Cookie Policy, and Privacy Policy in their entirety because the updated version in force at the time of using the Website will apply.",
    }),
    defineField({
      name: "jurisdiction",
      title: "Applicable Law and Jurisdiction",
      type: "text",
      description: "Legal jurisdiction and applicable law information",
      validation: (Rule) => Rule.required(),
      initialValue:
        "The use of the Website and the conclusion, execution, and termination of contracts concluded with the Company through the Website will be governed by Romanian law. Any disputes arising from or in connection with the use of the Website or the conclusion, execution, and termination of these contracts will be resolved amicably, or if this is not possible, the disputes will be settled by the competent Romanian judicial authorities.",
    }),
    defineField({
      name: "dataProcessing",
      title: "Processing of Personal Data",
      type: "array",
      of: [{ type: "string" }],
      description: "Information about personal data processing",
      validation: (Rule) => Rule.required(),
      initialValue: [
        "The processing of personal data by the Company is carried out in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (`General Data Protection Regulation`) and relevant national data protection legislation.",
        "For more details about the processing of personal data, please refer to the Privacy Policy and Cookie Policy. For any questions or requests regarding the protection of personal data, please contact us at the email address: dpo@qoobiss.com",
      ],
    }),
  ],
  preview: {
    select: {
      title: "companyInfo.name",
      subtitle: "lastUpdated",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Terms and Conditions",
        subtitle: subtitle ? `Last updated: ${subtitle}` : "No date set",
      };
    },
  },
});
