// app/news/[slug]/page.tsx
import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";
import { getPostBySlug } from "@/lib/posts";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <Banner
        title={post.title}
        className="bg-[url('/use-cases-banner-mobile.png')] bg-cover lg:bg-[url('/use-cases-banner.svg')]"
      />
      <article className="container container-padding max-w-6xl py-20">
        <div className="mb-12">
          <img
            src={post.image.src}
            alt={post.image.alt}
            className="w-full rounded-2xl mb-8 object-cover h-[400px]"
          />
          <time className="text-sm text-gray-500 block">{post.date}</time>
        </div>

        <div className="prose prose-lg mx-auto prose-headings:text-gray-900 prose-p:text-gray-600">
          <PortableText value={post.content} />
        </div>
      </article>
      <GetInTouch className="lg:pt-40" />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image.src],
    },
  };
}
