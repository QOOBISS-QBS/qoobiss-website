import { defineQuery } from "next-sanity";

export const PRIVACY_POLICY_QUERY = defineQuery(`*[_type == "privacyPolicy"][0]{
  lastUpdated,
  introduction,
  companyInfo{
    name,
    contacts
  },
  dataProcessing{
    intro,
    principles
  },
  dataTypes,
  legalGrounds,
  dataRetention,
  dataTransfer{
    intro,
    recipients,
    international
  },
  security,
  rights{
    intro,
    list,
    contact
  }
}`);
