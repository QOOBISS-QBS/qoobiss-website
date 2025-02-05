/* eslint-disable react/no-unescaped-entities */
import TermsAndConditions from "@/components/terms-and-conditions";
import { sanityFetch } from "@/sanity/lib/client";
import { TERMS_POLICY_QUERY } from "@/sanity/lib/queries/termsPolicy";

export default async function Home() {
  const [data] = await Promise.all([
    sanityFetch({
      query: TERMS_POLICY_QUERY,
    }),
  ]);
  return (
    <>
      <TermsAndConditions termsData={data} />
    </>
  );
}
