import { PartnerWithUs } from "@/components/partner-with-us";
import { GetInTouch } from "@/components/GetInTouch";
import { sanityFetch } from "@/sanity/lib/client";
import { partnerWithUsQuery } from "@/sanity/lib/queries/partnerWithUs";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const [partnerWithUsData, getInTouchData] = await Promise.all([
    sanityFetch({
      query: partnerWithUsQuery,
    }),
    sanityFetch({
      query: GET_IN_TOUCH_QUERY,
    }),
  ]);

  return (
    <>
      <PartnerWithUs {...partnerWithUsData} />
      <GetInTouch {...getInTouchData} />
    </>
  );
}
