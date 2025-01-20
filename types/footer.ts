// types/footer.ts

export interface Links {
  url: string;
  subTitle: string;
}

export interface Content {
  title: string;
  links: Links[];
}

export interface ContactInfo {
  email: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface UrlLink {
  url: string;
  title: string;
}

export interface FooterLogo {
  asset: {
    url: string;
  };
  alt?: string;
}

export interface FooterData {
  contents: Content[];
  officeAddress?: string[];
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  logo?: FooterLogo;
  mainHeadingText?: string;
  copyrightText?: string;
  termsUrl?: UrlLink;
  privacyUrl?: UrlLink;
  cookiesUrl?: UrlLink;
}

// Type Guards
export function isLinks(data: unknown): data is Links {
  if (!data || typeof data !== "object") return false;
  const candidate = data as Links;
  return (
    typeof candidate.url === "string" && typeof candidate.subTitle === "string"
  );
}

export function isContent(data: unknown): data is Content {
  if (!data || typeof data !== "object") return false;
  const candidate = data as Content;
  return (
    typeof candidate.title === "string" &&
    Array.isArray(candidate.links) &&
    candidate.links.every(isLinks)
  );
}

export function isSocialLink(data: unknown): data is SocialLink {
  if (!data || typeof data !== "object") return false;
  const candidate = data as SocialLink;
  return (
    typeof candidate.platform === "string" && typeof candidate.url === "string"
  );
}

export function isUrlLink(data: unknown): data is UrlLink {
  if (!data || typeof data !== "object") return false;
  const candidate = data as UrlLink;
  return (
    typeof candidate.url === "string" && typeof candidate.title === "string"
  );
}

export function isFooterLogo(data: unknown): data is FooterLogo {
  if (!data || typeof data !== "object") return false;
  const candidate = data as FooterLogo;
  return (
    candidate.asset &&
    typeof candidate.asset === "object" &&
    typeof candidate.asset.url === "string" &&
    (!candidate.alt || typeof candidate.alt === "string")
  );
}

export function isFooterData(data: unknown): data is FooterData {
  if (!data || typeof data !== "object") return false;
  const candidate = data as FooterData;
  return (
    Array.isArray(candidate.contents) &&
    candidate.contents.every(isContent) &&
    (!candidate.officeAddress ||
      (Array.isArray(candidate.officeAddress) &&
        candidate.officeAddress.every((line) => typeof line === "string"))) &&
    (!candidate.contactInfo ||
      (typeof candidate.contactInfo === "object" &&
        typeof candidate.contactInfo.email === "string")) &&
    (!candidate.socialLinks ||
      (Array.isArray(candidate.socialLinks) &&
        candidate.socialLinks.every(isSocialLink))) &&
    (!candidate.logo || isFooterLogo(candidate.logo)) &&
    (!candidate.mainHeadingText ||
      typeof candidate.mainHeadingText === "string") &&
    (!candidate.copyrightText || typeof candidate.copyrightText === "string") &&
    (!candidate.termsUrl || isUrlLink(candidate.termsUrl)) &&
    (!candidate.privacyUrl || isUrlLink(candidate.privacyUrl)) &&
    (!candidate.cookiesUrl || isUrlLink(candidate.cookiesUrl))
  );
}

// Sanitizers
export function sanitizeLinks(data: unknown): Links | null {
  if (!isLinks(data)) return null;
  return {
    url: data.url,
    subTitle: data.subTitle,
  };
}

export function sanitizeContent(data: unknown): Content | null {
  if (!isContent(data)) return null;
  return {
    title: data.title,
    links: data.links
      .map((link) => sanitizeLinks(link))
      .filter((link): link is Links => link !== null),
  };
}

export function sanitizeFooterData(data: unknown): FooterData | null {
  if (!isFooterData(data)) return null;

  return {
    contents: data.contents
      .map((content) => sanitizeContent(content))
      .filter((content): content is Content => content !== null),
    officeAddress: data.officeAddress,
    contactInfo: data.contactInfo,
    socialLinks: data.socialLinks,
    logo: data.logo,
    mainHeadingText: data.mainHeadingText,
    copyrightText: data.copyrightText,
    termsUrl: data.termsUrl,
    privacyUrl: data.privacyUrl,
    cookiesUrl: data.cookiesUrl,
  };
}
