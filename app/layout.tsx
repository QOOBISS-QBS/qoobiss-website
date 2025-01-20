import type { Metadata } from "next";
import Script from "next/script";
import { Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
// import { Button } from "@/components/ui/button";

// import { sanityFetch } from "@/sanity/lib/client";
// import Navbar from "@/components/navbar";
// import { NAVBAR_QUERY } from "@/sanity/lib/queries";
// import { Footer } from "@/components/footer";
// import { FOOTER_QUERY } from "@/sanity/lib/queries";

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
  // const navbarData = await sanityFetch({
  //   query: NAVBAR_QUERY,
  // });
  // const footerData = await sanityFetch({
  //   query: FOOTER_QUERY,
  // });

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
        {/* {isDraftMode.isEnabled && (
          <Button asChild variant="indigo" size="primary">
            <a
              className="fixed left-0 top-0 m-4 z-[999]"
              href="/api/draft-mode/disable"
            >
              Disable preview mode
            </a>
          </Button>
        )} */}
        <main>{children}</main>
        {isDraftMode.isEnabled && <VisualEditing />}
        {/* <Navbar {...navbarData} /> */}
        {/* <Footer {...footerData} /> */}
      </body>
    </html>
  );
}
