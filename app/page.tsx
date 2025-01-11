import { Navbar } from "@/components/navbar";
import { sanityFetch } from "@/sanity/lib/client";
import { NAVBAR_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const navbarData = await sanityFetch({
    query: NAVBAR_QUERY,
  });

  // Simple validation before rendering
  if (!navbarData || !navbarData.logo || !navbarData.button) {
    console.error("Invalid navbar data received from Sanity");
    return null;
  }

  return (
    <main>
      <Navbar {...navbarData} />
    </main>
  );
}
