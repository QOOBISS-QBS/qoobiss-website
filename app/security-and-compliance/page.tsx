import { SecurityAndCompliance } from "@/components/security-and-compliance";
import { sanityFetch } from "@/sanity/lib/client";
import { securityAndComplianceQuery } from "@/sanity/lib/queries/security-and-compliance";

const [securityAndComplianceData] = await Promise.all([
  sanityFetch({
    query: securityAndComplianceQuery,
  }),
]);

export default async function Home() {
  return (
    <>
      <SecurityAndCompliance {...securityAndComplianceData} />
    </>
  );
}
