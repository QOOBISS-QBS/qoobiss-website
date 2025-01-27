// schemaTypes/privacyPolicyType.ts

import { defineField, defineType } from "sanity";

export const privacyPolicySchema = defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue: "02.12.2024",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue: `Through this Policy, we inform you about how we collect, use, transfer, and protect your personal data. 
        We process them in accordance with the provisions of Regulation (EU) 2016/679 of the European Parliament 
        and of the Council of April 27, 2016, concerning the protection of natural persons with regard to the 
        processing of personal data and on the free movement of such data, and repealing Directive No. 95/46/EC 
        ("General Data Protection Regulation," hereinafter referred to as "GDPR"), and relevant national data 
        protection legislation.`,
    }),
    defineField({
      name: "companyInfo",
      title: "Company Information",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "name",
          title: "Company Name",
          type: "string",
          validation: (Rule) => Rule.required(),
          initialValue: "S.C. CREDIMATIC NETWORK S.R.L. Voluntari",
        },
        {
          name: "contacts",
          title: "Contact Details",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required().min(1),
          initialValue: [
            "Registered office address: 1/i Bld Pipera Street, Admax Center Building, office 6, 3rd floor, Voluntari, Ilfov County, Romania",
            "Email address: dpo@qoobis.com",
          ],
        },
      ],
    }),
    defineField({
      name: "dataProcessing",
      title: "Data Processing",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "intro",
          title: "Introduction",
          type: "text",
          validation: (Rule) => Rule.required(),
          initialValue: `The Company, as the Data Controller, processes the personal data of data subjects (employees, 
            legal entity clients, contractual partners and collaborators, job applicants, other individuals 
            who interact with the Company, and/or are engaged in contractual relationships with it).`,
        },
        {
          name: "principles",
          title: "Principles",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required().min(1),
          initialValue: [
            "processed lawfully, fairly, and transparently with regard to the data subject;",
            "collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes;",
            "adequate, relevant, and limited to what is necessary in relation to the purposes for which they are processed;",
            "accurate and kept up to date;",
            "kept in a form that allows the identification of data subjects for a period that does not exceed the time necessary for the purposes for which the data are processed;",
            "processed in a manner that ensures the appropriate security of personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage, by taking suitable technical or organizational measures.",
          ],
        },
      ],
    }),
    defineField({
      name: "dataTypes",
      title: "Data Types",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().min(1),
      initialValue: [
        "In the context of personnel recruitment, we process the following types of personal data:",
        "For the conclusion and execution of service and partnership/collaboration contracts, we primarily process the following types of personal data: name, surname, ID card/passport series and number, home/residence address, bank account number, email address, and phone number.",
        "For filling out and submitting the contact/online appointment scheduling form ('Contact' - 'Schedule an Online Meeting') on the Company's website - https://qoobiss.com/ (hereinafter referred to as the 'website'), we process the following types of personal data: name, surname, email address, phone number, company name, field of activity, date, and, where applicable, other data if provided by the data subject in the 'Message' section,",
        "For website visitors, it is possible that we collect data through cookies or similar technologies, such as IP address, internet browser, location, web pages accessed on our website, time spent on the website, internet network, and device used. For more details in this regard, please refer to the Cookie Policy.",
        "We do not use your personal data to send you marketing communications, such as newsletters, unless you expressly consent to such communications by checking a consent box. In this regard, we only process your email and ensure that you have an easy option to unsubscribe at any time and to withdraw your consent to receive these types of communications.",
      ],
    }),
    defineField({
      name: "legalGrounds",
      title: "Legal Grounds",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
      initialValue: [
        "Concluding and executing various contracts;",
        "Compliance with legal obligations;",
        "Based on prior requested and/or given consent (in the context of business opportunities, personnel recruitment, the transmission of marketing communications, etc.);",
        "For the purpose of legitimate interests pursued by the Company (e.g., adopting measures for the protection and security of our employees, exercising certain legitimate rights and interests of the Company in contentious or non-contentious proceedings, etc.).",
      ],
    }),
    defineField({
      name: "dataRetention",
      title: "Data Retention",
      type: "text",
      validation: (Rule) => Rule.required(),
      initialValue: `Personal data is stored for processing purposes for the duration required to achieve the processing 
        purposes mentioned in this Policy or for the duration imposed by law (e.g., in terms of archiving, 
        accounting, etc.).`,
    }),
    defineField({
      name: "dataTransfer",
      title: "Data Transfer",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "intro",
          title: "Introduction",
          type: "text",
          validation: (Rule) => Rule.required(),
          initialValue: `We will not disclose or transfer any of your personal data collected from you or about you to any 
            third party, except to:`,
        },
        {
          name: "recipients",
          title: "Recipients",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required().min(1),
          initialValue: [
            "Public authorities and institutions – when there is a legal obligation or for legitimate interests (defending the rights of the Company in contentious or non-contentious proceedings, etc.).",
            "Contractual partners or collaborators of the Company",
            "Any third party – if you have expressly and specifically consented for the respective situation and data.",
          ],
        },
        {
          name: "international",
          title: "International Transfer",
          type: "text",
          validation: (Rule) => Rule.required(),
          initialValue: `In case personal data processed by the Company are transferred by it directly or through its contractual 
            partners/collaborators outside the European Economic Area, we assure you that these transfers are made 
            in compliance with the GDPR (especially Article 46 of the GDPR), applicable legal provisions, with 
            adequate safeguards (standard data protection clauses adopted by the Commission), and subject to 
            enforceable rights and effective legal remedies for data subjects.`,
        },
      ],
    }),
    defineField({
      name: "security",
      title: "Security Measures",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().min(1),
      initialValue: [
        "The Company implements suitable technical and organizational measures to ensure a high level of security and protection of personal data.",
        "We use security methods and technologies, along with internal work policies and procedures, including control and auditing, to protect personal data collected in accordance with the relevant data protection laws in force.",
      ],
    }),
    defineField({
      name: "rights",
      title: "Rights",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "intro",
          title: "Introduction",
          type: "text",
          validation: (Rule) => Rule.required(),
          initialValue: `Any data subject can exercise the following rights, as provided for in the General Data Protection 
            Regulation:`,
        },
        {
          name: "list",
          title: "Rights List",
          type: "array",
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required().min(1),
          initialValue: [
            "Right of access;",
            "Right to rectification;",
            "Right to erasure;",
            "Right to restriction of processing;",
            "Right to data portability;",
            "Right to object to processing;",
            "Right not to be subject to a decision based solely on automated processing, including profiling;",
            "Right to lodge a complaint with the National Supervisory Authority for Personal Data Processing and the courts.",
          ],
        },
        {
          name: "contact",
          title: "Contact Information",
          type: "text",
          validation: (Rule) => Rule.required(),
          initialValue: `For any questions, concerns, or to exercise these rights, you can contact us via Email at: 
            dpo@qoobiss.com, or by mail or courier at the address: 1/i Bld Pipera Street, Admax Center Building, 
            office 6, 3rd floor, Voluntari, Ilfov County, Romania.`,
        },
      ],
    }),
  ],
  preview: {
    select: {
      lastUpdated: "lastUpdated",
    },
    prepare({ lastUpdated }) {
      return {
        title: "Privacy Policy",
        subtitle: `Last updated: ${lastUpdated}`,
      };
    },
  },
});
