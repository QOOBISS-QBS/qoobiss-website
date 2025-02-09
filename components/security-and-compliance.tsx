/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Banner } from "./Banner";
import { StaggeredHeading } from "@/components/helpers/word-curtain";

type ImageProps = {
  src: string;
  alt?: string;
};

type CertificationProps = {
  id: number;
  title: string;
  isoImage: ImageProps;
  shortDescription: string;
  badge: string;
  fullDescription: string;
  validUntil: string;
};

type Props = {
  heading: string;
  certifications: CertificationProps[];
};

export type SecurityAndComplianceProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const formatDate = (dateString: string) => {
  if (!dateString) {
    return "N/A";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "2-digit",
  });
};

export const SecurityAndCompliance = (props: SecurityAndComplianceProps) => {
  const { heading, certifications } = {
    ...SecurityAndComplianceDefaults,
    ...props,
  } as Props;

  return (
    <section>
      <Banner title="Security and Compliance" />
      <div className="pt-20 lg:pt-28">
        <div className="container container-padding">
          <StaggeredHeading className="text-3xl mb-6">
            {heading}
          </StaggeredHeading>
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-y-5 lg:grid-cols-3 lg:gap-5">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow">
                    <CardHeader className="flex-1">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{cert.title}</CardTitle>
                        <Badge variant="secondary">{cert.badge}</Badge>
                      </div>
                      <CardDescription>{cert.shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center">
                      <img
                        src={cert.isoImage.src}
                        alt={cert.isoImage.alt}
                        className="size-60 mx-auto object-contain"
                      />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <span className="text-sm">
                        Valid until:{" "}
                        {cert.validUntil === "" ? (
                          <Badge className="bg-red-100">N/A</Badge>
                        ) : (
                          formatDate(cert.validUntil)
                        )}
                      </span>
                      <Badge className="bg-green-100">Active</Badge>
                    </CardFooter>
                  </Card>
                </DialogTrigger>

                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <span className="flex flex-col lg:flex-row lg:items-center gap-2">
                      <DialogTitle className="text-left">
                        {cert.title}
                      </DialogTitle>
                      <Badge className="bg-gray-100 w-fit">{cert.badge}</Badge>
                    </span>
                    <DialogDescription>
                      <div className="mt-4 space-y-4 text-left">
                        <img
                          src={cert.isoImage.src}
                          alt={cert.isoImage.alt}
                          className="size-40 object-contain"
                        />
                        <p className="text-base leading-relaxed">
                          {cert.fullDescription}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm">
                            <span className="mr-2">Certification Status:</span>
                            <Badge className="bg-green-100">Active</Badge>
                          </span>
                          <span className="text-sm">
                            Valid until:{" "}
                            {cert.validUntil === "" ? (
                              <Badge className="bg-red-100">N/A</Badge>
                            ) : (
                              formatDate(cert.validUntil)
                            )}
                          </span>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SecurityAndComplianceDefaults: SecurityAndComplianceProps = {
  heading: "Trusted Standards You Can Rely On",
  certifications: [
    {
      id: 1,
      title: "ADR Compliance",
      isoImage: {
        src: "/adr.png",
        alt: "Adherence to Digital Authority Standards",
      },
      shortDescription: "Adherence to Digital Authority Standards",
      badge: "National Digital",
      fullDescription:
        "The activity of remote identification of individuals using video means by service providers registered in Romania can only be carried out after obtaining the approval issued by the Authority for the Digitization of Romania. A legal entity established and authorized to provide such services in any Member State of the European Union (EU) that wishes to conduct remote identification activities using video means for Romanian citizens or on the territory of Romania may carry out this activity under the conditions of the 2021 regulation regarding the regulation, recognition, approval, or acceptance of the procedure for remote identification of individuals using video means. Qoobiss is on the ADR Accredited Entities List with a valid accreditation of Ontrace.",
      validUntil: "2026-11",
    },
    {
      id: 2,
      title: "ISO 9001:2015 Certificate",
      isoImage: {
        src: "/9001.svg",
        alt: "ISO 9001:2015 Certificate",
      },
      shortDescription: "Quality Management System",
      badge: "Quality",
      fullDescription:
        "Qoobiss has established a Quality Management System that complies with the ISO 9001:2015 standard, specifically for activities related to creating custom software tailored to customer needs.",
      validUntil: "2025-03",
    },
    {
      id: 3,
      title: "ISO 27001:2013 Certificate",
      isoImage: {
        src: "/27001.svg",
        alt: "ISO 27001:2013 Certificate",
      },
      shortDescription: "Robust Information Security",
      badge: "Security",
      fullDescription:
        "Qoobiss has documented an Information Security Management System in accordance with the ISO 27001:2013 standard for the following areas of activity: the development of custom software designed for customer needs.",
      validUntil: "2025-03",
    },
    {
      id: 4,
      title: "ETSI Technical Standards 119 461",
      isoImage: {
        src: "/digital-signature.png",
        alt: "Digital Signature",
      },
      shortDescription: "Electronic Signatures and Infrastructures",
      badge: "Digital Trust",
      fullDescription:
        "Electronic Signatures and Infrastructures (ESI); Policy and security requirements for trust service components providing identity proofing of trust service subjects.",
      validUntil: "",
    },
    {
      id: 5,
      title: "eIDAS",
      isoImage: {
        src: "/eidas.png",
        alt: "eIDAS",
      },
      shortDescription: "Trusted Digital Transactions",
      badge: "Compliance",
      fullDescription:
        "Trusted Digital Transactions eIDAS compliance ensures that Qoobiss adheres to EU regulations for electronic identification and trust services for electronic transactions. This enables us to provide digital services that are secure, transparent, and legally binding across the EU.",
      validUntil: "",
    },
    {
      id: 6,
      title: "ISO 30107-3 Levels 1 and 2",
      isoImage: {
        src: "/biometric-identification.png",
        alt: "Biometric Security Assurance",
      },
      shortDescription: "Biometric Security Assurance",
      badge: "Biometric",
      fullDescription:
        "Biometric Security Assurance ISO 30107-3 standards focus on the testing and reporting of biometric presentation attack detection (PAD). Qoobiss has achieved Level 1 and Level 2 certification, affirming our robust measures in securing biometric data against spoofing and fraud.",
      validUntil: "",
    },
  ],
};
