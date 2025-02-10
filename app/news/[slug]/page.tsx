// app/news/[slug]/page.tsx
import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  // In a real app, you would fetch the post data here
  const post = {
    title: "Enhanced Due Diligence for Credit Industry",
    date: "January 20, 2024",
    image: {
      src: "/use-case-image.png",
      alt: "Article featured image",
    },
    content: `
      <div class="max-w-3xl mx-auto">
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 class="text-3xl font-bold mb-6 mt-12">
          Understanding the Challenge
        </h2>
        <p class="mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <h2 class="text-3xl font-bold mb-6 mt-12">
          Key Benefits
        </h2>
        <ul class="list-disc pl-6 mb-8 space-y-3">
          <li>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
          </li>
          <li>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
          </li>
          <li>
            Consectetur, adipisci velit, sed quia non numquam eius modi tempora
          </li>
          <li>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          </li>
        </ul>

        <div class="bg-gray-50 p-8 rounded-2xl mb-12">
          <blockquote class="text-xl font-medium italic text-gray-900">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
          </blockquote>
          <p class="mt-4 text-gray-600">
            — Industry Expert
          </p>
        </div>

        <h2 class="text-3xl font-bold mb-6 mt-12">
          Implementation Strategy
        </h2>
        <p class="mb-6">
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
        </p>

        <div class="grid grid-cols-2 gap-8 my-12">
          <div>
            <h3 class="text-xl font-bold mb-4">Phase 1: Analysis</h3>
            <p class="text-gray-600">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Phase 2: Development</h3>
            <p class="text-gray-600">
              Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mb-6 mt-12">
          Looking Ahead
        </h2>
        <p class="mb-6">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        </p>
        <p class="mb-6">
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
        </p>
      </div>
    `,
  };

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

        <div
          className="prose prose-lg mx-auto prose-headings:text-gray-900 prose-p:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <GetInTouch className="lg:pt-40" />
    </main>
  );
}

export async function generateMetadata({ params }: Props) {
  return {
    title: "Enhanced Due Diligence for Credit Industry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    openGraph: {
      title: "Enhanced Due Diligence for Credit Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      images: ["/use-case-image.png"],
    },
  };
}
