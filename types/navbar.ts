// types/navbar.ts

export interface NavLink {
  title: string;
  href: string;
}

export interface NavigationItem {
  title: string;
  href?: string;
  links?: NavLink[];
}

export interface NavbarLogo {
  asset: {
    url: string;
  };
  alt: string;
}

export interface NavbarButton {
  title: string;
  href: string;
}

export interface NavbarProps {
  logo: NavbarLogo;
  navigationItems: NavigationItem[];
  button: NavbarButton;
}

// Type Guards
export function isNavLink(item: unknown): item is NavLink {
  if (!item || typeof item !== "object") return false;

  const candidate = item as NavLink;
  return (
    typeof candidate.title === "string" &&
    typeof candidate.href === "string" &&
    candidate.title.length > 0 &&
    candidate.href.length > 0
  );
}

export function isNavigationItem(item: unknown): item is NavigationItem {
  if (!item || typeof item !== "object") return false;

  const candidate = item as NavigationItem;

  // Check required fields
  if (typeof candidate.title !== "string" || candidate.title.length === 0) {
    return false;
  }

  // Check optional href
  if (
    candidate.href !== undefined &&
    (typeof candidate.href !== "string" || candidate.href.length === 0)
  ) {
    return false;
  }

  // Check optional links array
  if (candidate.links !== undefined) {
    if (!Array.isArray(candidate.links)) return false;
    return candidate.links.every(isNavLink);
  }

  return true;
}

export function isNavbarLogo(logo: unknown): logo is NavbarLogo {
  if (!logo || typeof logo !== "object") return false;

  const candidate = logo as NavbarLogo;
  return (
    candidate.asset &&
    typeof candidate.asset === "object" &&
    typeof candidate.asset.url === "string" &&
    candidate.asset.url.length > 0 &&
    typeof candidate.alt === "string" &&
    candidate.alt.length > 0
  );
}

export function isNavbarButton(button: unknown): button is NavbarButton {
  if (!button || typeof button !== "object") return false;

  const candidate = button as NavbarButton;
  return (
    typeof candidate.title === "string" &&
    typeof candidate.href === "string" &&
    candidate.title.length > 0 &&
    candidate.href.length > 0
  );
}

export function isNavbarData(data: unknown): data is NavbarProps {
  if (!data || typeof data !== "object") return false;

  const candidate = data as NavbarProps;

  return (
    isNavbarLogo(candidate.logo) &&
    Array.isArray(candidate.navigationItems) &&
    candidate.navigationItems.every(isNavigationItem) &&
    isNavbarButton(candidate.button)
  );
}

// Sanitizer functions to ensure data safety
export function sanitizeNavLink(data: unknown): NavLink | null {
  if (!isNavLink(data)) return null;
  return {
    title: data.title,
    href: data.href,
  };
}

export function sanitizeNavigationItem(data: unknown): NavigationItem | null {
  if (!isNavigationItem(data)) return null;

  const sanitized: NavigationItem = {
    title: data.title,
  };

  if (data.href) sanitized.href = data.href;
  if (data.links) {
    const sanitizedLinks = data.links
      .map((link) => sanitizeNavLink(link))
      .filter((link): link is NavLink => link !== null);
    if (sanitizedLinks.length > 0) {
      sanitized.links = sanitizedLinks;
    }
  }

  return sanitized;
}

export function sanitizeNavbarData(data: unknown): NavbarProps | null {
  if (!isNavbarData(data)) return null;

  return {
    logo: {
      asset: {
        url: data.logo.asset.url,
      },
      alt: data.logo.alt,
    },
    navigationItems: data.navigationItems
      .map((item) => sanitizeNavigationItem(item))
      .filter((item): item is NavigationItem => item !== null),
    button: {
      title: data.button.title,
      href: data.button.href,
    },
  };
}
