import { createClient, QueryOptions, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // Set to false for draft mode
  token: process.env.SANITY_API_READ_TOKEN,
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: "/studio",
  },
});

export function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  const queryOptions: QueryOptions = {};
  let maybeRevalidate = revalidate;

  if (tags.length) {
    maybeRevalidate = false; // Cache indefinitely if tags supplied
  }

  return client.fetch(query, params, {
    ...queryOptions,
    next: {
      revalidate: maybeRevalidate,
      tags,
    },
  });
}
