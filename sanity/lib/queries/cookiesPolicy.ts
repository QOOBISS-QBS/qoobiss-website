export const COOKIES_POLICY_QUERY = `*[_type == "cookiesPolicy"][0] {
  lastUpdated,
  introduction,
  gdprCompliance,
  dataTransmission,
  googleAnalytics,
  thirdPartyTech,
  cookieConsent,
  whatAreCookies,
  howCookiesUsed,
  thirdPartyCookies,
  cookieLifespan,
  controlCookies,
  browserLinks,
  browserControlLinks[] {
    text,
    url
  },
  websiteCookies,
  scanReport,
  cookieCategories[] {
    name,
    count,
    description,
    cookies[] {
      name,
      provider,
      type,
      expiry,
      description
    }
  }
}`;
