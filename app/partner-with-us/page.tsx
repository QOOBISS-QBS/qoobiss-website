import { PartnerWithUs } from "@/components/partner-with-us";
import { sanityFetch } from "@/sanity/lib/client";
import { partnerWithUsQuery } from "@/sanity/lib/queries/partnerWithUs";

export default async function Home() {
  const [partnerWithUsData] = await Promise.all([
    sanityFetch({
      query: partnerWithUsQuery,
    }),
  ]);

  return (
    <>
      <PartnerWithUs {...partnerWithUsData} />
    </>
  );
}
