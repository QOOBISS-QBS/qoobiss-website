import { CookiesPolicy } from "@/components/cookies-policy";
import { sanityFetch } from "@/sanity/lib/client";
import { COOKIES_POLICY_QUERY } from "@/sanity/lib/queries/cookiesPolicy";

export default async function Home() {
  const policyData = await sanityFetch({
    query: COOKIES_POLICY_QUERY,
  });

  return (
    <div>
      <CookiesPolicy policyData={policyData} />
    </div>
  );
}
