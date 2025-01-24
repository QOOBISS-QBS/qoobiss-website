import type { Metadata } from "next";

import Script from "next/script";
import { Sora } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

import { sanityFetch } from "@/sanity/lib/client";
import { NAVBAR_QUERY, FOOTER_QUERY } from "@/sanity/lib/queries";

// import { Button } from "@/components/ui/button";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qoobiss",
  description: "Digital transformation accessible to everyone",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarData = await sanityFetch({
    query: NAVBAR_QUERY,
  });

  const footerData = await sanityFetch({
    query: FOOTER_QUERY,
  });

  const isDraftMode = await draftMode();

  return (
    <html lang="en">
      <body
        className={cn("font-sans antialiased", sora.className, sora.variable)}
      >
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          strategy="afterInteractive"
          data-pid="11TQFqXWgKbk0tsqF"
          data-version="062024"
        />
        <main>
          <Navbar {...navbarData} />
          {children}
          <Footer {...footerData} />
        </main>
        {isDraftMode.isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}

{
  /* {isDraftMode.isEnabled && (
          <Button asChild variant="indigo" size="primary">
            <a
              className="fixed left-0 top-0 m-4 z-[999]"
              href="/api/draft-mode/disable"
            >
              Disable preview mode
            </a>
          </Button>
        )} */
}
