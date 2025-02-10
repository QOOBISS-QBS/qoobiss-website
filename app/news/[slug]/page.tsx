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
          <PortableText
            value={post.content}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {children}
                  </h4>
                ),
                h5: ({ children }) => (
                  <h5 className="text-lg font-semibold mb-2 text-gray-900">
                    {children}
                  </h5>
                ),
                h6: ({ children }) => (
                  <h6 className="text-base font-semibold mb-2 text-gray-900">
                    {children}
                  </h6>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
                    {children}
                  </blockquote>
                ),
                normal: ({ children }) => (
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {children}
                  </p>
                ),
                code: ({ children }) => (
                  <pre className="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">
                    <code className="text-sm font-mono text-gray-800">
                      {children}
                    </code>
                  </pre>
                ),
              },
              marks: {
                link: ({ children, value }) => {
                  const rel = !value.href.startsWith("/")
                    ? "noreferrer noopener"
                    : undefined;
                  return (
                    <a
                      href={value.href}
                      rel={rel}
                      className="text-blue-600 hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
                strong: ({ children }) => (
                  <strong className="font-bold text-gray-900">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-gray-800">{children}</em>
                ),
                underline: ({ children }) => (
                  <span className="underline decoration-2">{children}</span>
                ),
                strike: ({ children }) => (
                  <span className="line-through text-gray-500">{children}</span>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
                    {children}
                  </code>
                ),
                highlight: ({ children }) => (
                  <span className="bg-yellow-100 px-1 rounded">{children}</span>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                    {children}
                  </ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-600">
                    {children}
                  </ol>
                ),
              },
            }}
          />
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
