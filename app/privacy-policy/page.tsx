import PrivacyPolicy from "@/components/privacy-policy";
import { sanityFetch } from "@/sanity/lib/client";
import { PRIVACY_POLICY_QUERY } from "@/sanity/lib/queries/privacyPolicy";

export default async function Home() {
  const [data] = await Promise.all([
    sanityFetch({
      query: PRIVACY_POLICY_QUERY,
    }),
  ]);
  return (
    <>
      <PrivacyPolicy data={data} />
    </>
  );
}
