/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/posts.ts
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export type Post = {
  slug: string;
  url: string;
  image: {
    src: string;
    alt: string;
  };
  imageMobile: {
    src: string;
    alt: string;
  };
  date: string;
  title: string;
  description: string;
  content: any;
};

export async function getAllPosts(): Promise<Post[]> {
  const posts = await client.fetch(`
    *[_type == "news"] | order(date desc) {
      title,
      "slug": slug.current,
      date,
      description,
      image,
      imageMobile,
      content
    }
  `);

  return posts.map((post: any) => ({
    slug: post.slug,
    url: `/${post.slug}`,
    image: {
      src: urlFor(post.image).url(),
      alt: post.image.alt || post.title,
    },
    imageMobile: {
      src: urlFor(post.imageMobile).url(),
      alt: post.imageMobile.alt || post.title,
    },
    date: new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    title: post.title,
    description: post.description,
    content: post.content,
  }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await client.fetch(
    `
    *[_type == "news" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      date,
      description,
      image,
      imageMobile,
      content
    }
  `,
    { slug }
  );

  if (!posts) return null;

  return {
    slug: posts.slug,
    url: `/${posts.slug}`,
    image: {
      src: urlFor(posts.image).url(),
      alt: posts.image.alt || posts.title,
    },
    imageMobile: {
      src: urlFor(posts.imageMobile).url(),
      alt: posts.imageMobile.alt || posts.title,
    },
    date: new Date(posts.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    title: posts.title,
    description: posts.description,
    content: posts.content,
  };
}
