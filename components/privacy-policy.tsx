/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Banner } from "@/components/Banner";
import { sanityFetch } from "@/sanity/lib/client";
import { PRIVACY_POLICY_QUERY } from "@/sanity/lib/queries/privacyPolicy";

const PolicySection = ({ number, title, children }: any) => (
  <section className="mb-8">
    <h2 className="flex gap-2 font-bold">
      <span className="text-gray-500">{number}</span>
      <span>{title}</span>
    </h2>
    {children}
  </section>
);

const BulletList = ({ items }: any) => (
  <ul className="list-none pl-0">
    {items.map((item: any, index: any) => (
      <li key={index} className="flex items-baseline gap-2">
        <span className="text-gray-500">-</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default async function PrivacyPolicy() {
  const [data] = await Promise.all([
    sanityFetch({
      query: PRIVACY_POLICY_QUERY,
    }),
  ]);

  return (
    <div>
      <Banner title="Privacy Policy" />
      <article className="prose prose-slate max-w-xxs lg:max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Last updated on {data.lastUpdated}
          </p>
        </div>

        <section className="mb-8">
          <p className="font-normal">{data.introduction}</p>
        </section>

        <PolicySection number="1." title="Who We Are">
          <p className="font-semibold">{data.companyInfo.name}</p>
          <p className="mb-4 font-normal">Our contact details are:</p>
          <BulletList items={data.companyInfo.contacts} />
        </PolicySection>

        <PolicySection
          number="2."
          title="How Do We Process Your Personal Data?"
        >
          <p className="font-normal">{data.dataProcessing.intro}</p>
          <p className="font-normal">The personal data are:</p>
          <BulletList items={data.dataProcessing.principles} />
        </PolicySection>

        <PolicySection
          number="3."
          title="What Types of Personal Data Do We Process and For What Purposes?"
        >
          <div className="space-y-4">
            {data.dataTypes.map((text: any, index: any) => (
              <p key={index} className="font-normal">
                {text}
              </p>
            ))}
          </div>
        </PolicySection>

        <PolicySection
          number="4."
          title="What Are the Legal Grounds for Processing Your Personal Data?"
        >
          <p className="font-normal">
            Your personal data are processed for the following purposes:
          </p>
          <BulletList items={data.legalGrounds} />
        </PolicySection>

        <PolicySection
          number="5."
          title="How Long Do We Process Your Personal Data?"
        >
          <p className="font-normal">{data.dataRetention}</p>
        </PolicySection>

        <PolicySection
          number="6."
          title="To Whom Do We Transmit Your Personal Data?"
        >
          <p className="font-normal">{data.dataTransfer.intro}</p>
          <BulletList items={data.dataTransfer.recipients} />
          <p className="font-normal">{data.dataTransfer.international}</p>
        </PolicySection>

        <PolicySection
          number="7."
          title="What Protection Measures and Safeguards Do We Implement?"
        >
          {data.security.map((text: any, index: any) => (
            <p key={index} className="font-normal">
              {text}
            </p>
          ))}
        </PolicySection>

        <PolicySection
          number="8."
          title="What Are Your Rights as a Data Subject?"
        >
          <p className="font-normal">{data.rights.intro}</p>
          <BulletList items={data.rights.list} />
          <p className="mt-4 font-normal">{data.rights.contact}</p>
        </PolicySection>
      </article>
    </div>
  );
}
