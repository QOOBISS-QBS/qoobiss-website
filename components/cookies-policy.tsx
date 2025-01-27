/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Banner } from "@/components/Banner";

import { client } from "@/sanity/lib/client";
import { COOKIES_POLICY_QUERY } from "@/sanity/lib/queries/cookiesPolicy";

export const CookiesPolicy = async () => {
  const policyData = await client.fetch(COOKIES_POLICY_QUERY);

  return (
    <main>
      <Banner title="Cookies Policy" />
      <article className="prose prose-slate max-w-xxs lg:max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Last updated on {policyData.lastUpdated}
          </p>
        </div>

        <section className="mb-8">
          <p>{policyData.introduction}</p>
          <p>{policyData.gdprCompliance}</p>
          <p>{policyData.dataTransmission}</p>
          <p>{policyData.googleAnalytics}</p>
          <p>{policyData.thirdPartyTech}</p>
          <p>{policyData.cookieConsent}</p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- What are cookies?</h3>
          {policyData.whatAreCookies.map((paragraph: any, index: any) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- How are cookies used?</h3>
          {policyData.howCookiesUsed.map((paragraph: any, index: any) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- What are third-party cookies?</h3>
          <p>{policyData.thirdPartyCookies}</p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">- What is the lifespan of a cookie?</h3>
          <p>{policyData.cookieLifespan}</p>
        </section>

        <section>
          <h3 className="font-semibold">- How can you control cookies?</h3>
          <p className="mb-4">{policyData.controlCookies}</p>
          <p className="mb-4">{policyData.browserLinks}</p>

          {policyData.browserControlLinks.map((link: any, index: any) => (
            <li key={index}>
              <a href={link.url} className="text-blue-600 hover:text-blue-800">
                {link.text}
              </a>
            </li>
          ))}

          <p className="my-4">{policyData.websiteCookies}</p>
          <p className="mb-4">{policyData.scanReport}</p>
        </section>

        <div className="space-y-8">
          {policyData.cookieCategories.map((category: any) => (
            <section key={category.name}>
              <div className="rounded-lg mb-4">
                <h3 className="font-semibold">
                  {category.name}: {category.count}
                </h3>
                <p>{category.description}</p>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cookie Name</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Expiry</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {category.cookies.map((cookie: any) => (
                    <TableRow key={cookie.name}>
                      <TableCell className="font-medium">
                        {cookie.name}
                      </TableCell>
                      <TableCell>{cookie.provider}</TableCell>
                      <TableCell>{cookie.type}</TableCell>
                      <TableCell>{cookie.expiry}</TableCell>
                      <TableCell>{cookie.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};
