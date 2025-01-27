/* eslint-disable react/no-unescaped-entities */
import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <Banner title="Terms and Conditions" />
      <article className="prose prose-slate max-w-xxs lg:max-w-7xl mx-auto py-8">
        <div className="mb-8">
          <p className="text-sm text-gray-600">Last updated on 02.12.2024</p>
        </div>

        <section className="mb-8">
          <h3 className="font-semibold">1. Introduction</h3>
          <p>
            - This document (together with all the documents mentioned in it)
            establishes the terms and conditions governing the use of this
            website, https://qoobiss.com/ (hereinafter the "Website").
          </p>
          <p>
            - The purpose of the Website is to present and promote a
            personalized KYC (Know Your Customer) solution for digital identity
            verification, used for the rapid registration of customers in
            various industries, provided by the company CREDIMATIC NETWORK
            S.R.L. and contracting, through the Website, with potential
            customers interested in these services.
          </p>
          <p>
            - Please read these Terms and Conditions, Cookie Policy, and Privacy
            Policy before using the Website. By accessing and using the Website,
            you expressly acknowledge the mandatory nature of these documents
            and undertake to comply with them.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">2. Who We Are</h3>
          <p>- S.C. CREDIMATIC NETWORK S.R.L.</p>
          <p className="mb-4">Our contact details are:</p>
          <ul className="list-none">
            <li>
              - Registered office address: 54A Av. Popisteanu Street, Expo
              Business Park, 1st floor, Bucharest, Romania.
            </li>
            <li>- Email address: dpo@qoobiss.com</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">3. Intellectual Property</h3>
          <p>
            - The company is the exclusive holder of all intellectual property
            rights related to the content of the Website, including but not
            limited to: articles, text, photos, illustrations, music, audio and
            video clips, trademarks, logos, and patterns.
          </p>
          <p>
            - Visitors to the Website can access, download, and print materials
            published on the Website for personal use only and for
            non-commercial purposes. As a result of any of these actions,
            visitors to the Website do not acquire or are not granted any
            rights, titles, or legitimate interests in the materials published
            on the Website.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">4. Terms</h3>
          <ul className="list-none">
            <li>
              - <span className="font-medium">Seller/Company</span> – CREDIMATIC
              NETWORK S.R.L.
            </li>
            <li>
              - <span className="font-medium">Visitor</span> – any
              individual/legal person interested in the personalized KYC
              solution for digital identity verification used for the rapid
              registration of customers in various industries offered by the
              Company and who has access to the content of the Site.
            </li>
            <li>
              - <span className="font-medium">Client</span> – any legal person
              who has access to the services offered by the Company through the
              site, by any means of communication provided by the Company.
            </li>
            <li>
              - <span className="font-medium">Site</span> – the online store
              hosted at the web address https://qoobiss.com/
            </li>
            <li>
              - <span className="font-medium">Request</span> – a form of
              communication between the Company and the Client through the Site.
            </li>
            <li>
              -{" "}
              <span className="font-medium">
                Commercial Communications / Newsletter
              </span>{" "}
              – any type of message sent containing general and thematic
              information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">5. Use of the Website</h3>
          <p>
            - By using the Website, you agree to not make any false or
            fraudulent requests. In case we have reasonable grounds to believe
            that you have made such a request, we have the right not to respond
            to it and to inform the competent authorities accordingly.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">6. Limitation of Liability</h3>
          <p>
            - The Company does not assume responsibility for any damages that
            the Website visitor, potential Client, or any other third party may
            suffer as a result of using the Website in any way or for any
            purpose or as a result of the Company's compliance with any of its
            legal and/or contractual obligations.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">
            7. Our Right to Modify the Terms and Conditions
          </h3>
          <p>
            - We have the right to revise and modify the Terms and Conditions
            occasionally and at our discretion. You are responsible for reading
            the Terms and Conditions, Cookie Policy, and Privacy Policy in their
            entirety because the updated version in force at the time of using
            the Website will apply.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold">8. Applicable Law and Jurisdiction</h3>
          <p>
            - The use of the Website and the conclusion, execution, and
            termination of contracts concluded with the Company through the
            Website will be governed by Romanian law. Any disputes arising from
            or in connection with the use of the Website or the conclusion,
            execution, and termination of these contracts will be resolved
            amicably, or if this is not possible, the disputes will be settled
            by the competent Romanian judicial authorities.
          </p>
        </section>

        <section>
          <h3 className="font-semibold">9. Processing of Personal Data</h3>
          <p>
            - The processing of personal data by the Company is carried out in
            accordance with Regulation (EU) 2016/679 of the European Parliament
            and of the Council of 27 April 2016 on the protection of natural
            persons with regard to the processing of personal data and on the
            free movement of such data, and repealing Directive 95/46/EC
            ("General Data Protection Regulation") and relevant national data
            protection legislation.
          </p>
          <p>
            - For more details about the processing of personal data, please
            refer to the Privacy Policy and Cookie Policy. For any questions or
            requests regarding the protection of personal data, please contact
            us at the email address: dpo@qoobiss.com
          </p>
        </section>
      </article>
    </main>
  );
}
