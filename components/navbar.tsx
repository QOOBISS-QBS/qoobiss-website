// components/navbar.tsx

"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  type NavbarProps,
  type NavigationItem,
  sanitizeNavigationItem,
  isNavigationItem,
  isNavLink,
} from "@/types/navbar";

const DesktopNav = ({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (item: NavigationItem) => {
    if (item.href) {
      router.push(item.href);
    }
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:flex">
        {navigationItems.filter(isNavigationItem).map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger
              onClick={() => handleNavigation(item)}
              className={cn(
                "cursor-pointer",
                pathname === item.href && "text-electric-violet"
              )}
            >
              {item.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col items-start text-left w-72 gap-2 p-6">
              {item.links?.filter(isNavLink).map((link, linkIndex) => (
                <NavigationMenuLink asChild key={linkIndex}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block select-none leading-none p-2 w-full no-underline outline-none transition-colors text-light-foreground rounded-lg hover:text-electric-violet",
                      pathname === link.href && "text-electric-violet"
                    )}
                  >
                    <span className="text-base font-medium leading-none">
                      {link.title}
                    </span>
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = ({
  open,
  onOpenChange,
  logo,
  navigationItems,
  button,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  logo: NavbarProps["logo"];
  navigationItems: NavigationItem[];
  button: NavbarProps["button"];
}) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  const handleLinkClick = (href: string) => {
    onOpenChange(false);
    router.push(href);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon" variant="link">
          <Menu className="size-6 text-light-background" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <SheetHeader className="border-b border-dark-stroke pb-[18px]">
          <SheetTitle asChild>
            <Link href="/" className="flex items-center">
              <Image
                src={logo.asset.url}
                alt={logo.alt}
                height={125}
                width={125}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-6">
          {navigationItems.filter(isNavigationItem).map((item, index) => (
            <div key={index} className="space-y-3">
              <h2 className="font-bold text-lg focus:outline-none">
                {item.title}
              </h2>
              <div className="flex flex-col gap-2">
                {item.links?.filter(isNavLink).map((link, linkIndex) => (
                  <button
                    key={linkIndex}
                    onClick={() => handleLinkClick(link.href)}
                    className={cn(
                      "text-sm text-left hover:text-electric-violet",
                      pathname === link.href
                        ? "text-electric-violet"
                        : "text-dark-foreground"
                    )}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="primary-dark"
          size="primary"
          className="mt-8 w-full"
          onClick={() => handleLinkClick(button.href)}
        >
          {button.title}
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export const Navbar = ({ logo, navigationItems = [], button }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  // Sanitize navigation items
  const sanitizedItems = (navigationItems || [])
    .map(sanitizeNavigationItem)
    .filter((item): item is NavigationItem => item !== null);

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-background border-b border-dark-stroke shadow-lg">
      <div className="container container-padding">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo.asset.url}
              alt={logo.alt}
              height={125}
              width={125}
            />
          </Link>

          <div className="flex items-center gap-4">
            <DesktopNav navigationItems={sanitizedItems} />
            <Separator
              className="bg-white/25 h-8 mx-4 hidden lg:block"
              orientation="vertical"
            />
            <Link href={button.href}>
              <Button
                variant="primary-dark"
                size="primary"
                className="hidden lg:block"
              >
                {button.title}
              </Button>
            </Link>
            <MobileNav
              open={open}
              onOpenChange={setOpen}
              logo={logo}
              navigationItems={sanitizedItems}
              button={button}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
