export const TERMS_POLICY_QUERY = `*[_type == "termsPolicy"][0] {
  lastUpdated,
  introduction,
  companyInfo {
    name,
    contacts
  },
  intellectualProperty,
  terms,
  websiteUse,
  liability,
  modifications,
  jurisdiction,
  dataProcessing
}`;
