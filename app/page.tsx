import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { sanityFetch } from "@/sanity/lib/client";
import { NAVBAR_QUERY, HEADER_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const navbar = await sanityFetch({
    query: NAVBAR_QUERY,
  });

  const header = await sanityFetch({
    query: HEADER_QUERY,
  });

  return (
    <main>
      <Navbar {...navbar} />
      <Header {...header} />
    </main>
  );
}
