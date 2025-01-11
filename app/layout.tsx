import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { Button } from "@/components/ui/button";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qoobiss",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans antialiased", sora.className, sora.variable)}
      >
        {(await draftMode()).isEnabled && (
          <Button asChild variant="indigo" size="primary">
            <a
              className="fixed right-0 bottom-0 m-4"
              href="/api/draft-mode/disable"
            >
              Disable preview mode
            </a>
          </Button>
        )}
        {children}
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
