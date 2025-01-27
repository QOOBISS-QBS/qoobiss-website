/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Banner } from "@/components/Banner";
import { client } from "@/sanity/lib/client";
import { TERMS_POLICY_QUERY } from "@/sanity/lib/queries/termsPolicy";

const PolicySection = ({ number, title, children }: any) => (
  <section className="mb-8">
    <h3 className="font-semibold flex gap-2">
      <span>{number}</span>
      <span>{title}</span>
    </h3>
    {children}
  </section>
);

const BulletList = ({ items }: any) => (
  <ul className="list-none">
    {items.map((item: any, index: any) => (
      <li key={index} className="flex items-baseline gap-2">
        <span>-</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default async function TermsAndConditions() {
  const termsData = await client.fetch(TERMS_POLICY_QUERY);

  if (!termsData) {
    return null;
  }

  return (
    <div>
      <Banner title="Terms and Conditions" />
      <article className="prose prose-slate max-w-xxs lg:max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Last updated on {termsData.lastUpdated}
          </p>
        </div>

        <PolicySection number="1." title="Introduction">
          <BulletList items={termsData.introduction} />
        </PolicySection>

        <PolicySection number="2." title="Who We Are">
          <p>- {termsData.companyInfo.name}</p>
          <p className="mb-4">Our contact details are:</p>
          <BulletList items={termsData.companyInfo.contacts} />
        </PolicySection>

        <PolicySection number="3." title="Intellectual Property">
          <BulletList items={termsData.intellectualProperty} />
        </PolicySection>

        <PolicySection number="4." title="Terms">
          <BulletList items={termsData.terms} />
        </PolicySection>

        <PolicySection number="5." title="Use of the Website">
          <p>{termsData.websiteUse}</p>
        </PolicySection>

        <PolicySection number="6." title="Limitation of Liability">
          <p>{termsData.liability}</p>
        </PolicySection>

        <PolicySection
          number="7."
          title="Our Right to Modify the Terms and Conditions"
        >
          <p>{termsData.modifications}</p>
        </PolicySection>

        <PolicySection number="8." title="Applicable Law and Jurisdiction">
          <p>{termsData.jurisdiction}</p>
        </PolicySection>

        <PolicySection number="9." title="Processing of Personal Data">
          <BulletList items={termsData.dataProcessing} />
        </PolicySection>
      </article>
    </div>
  );
}
