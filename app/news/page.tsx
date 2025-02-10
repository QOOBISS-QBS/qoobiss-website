// app/news/page.tsx
import { Banner } from "@/components/Banner";
import { GetInTouch } from "@/components/GetInTouch";
import { Hero } from "@/components/news/Hero";
import { NewsSection } from "@/components/news/NewsSection";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 3600;

export default async function NewsPage() {
  const posts = await getAllPosts();

  return (
    <main>
      <Banner
        title="News"
        className="bg-[url('/use-cases-banner-mobile.png')] bg-cover lg:bg-[url('/use-cases-banner.svg')]"
      />
      <Hero />
      <NewsSection news={posts} />
      <GetInTouch className="lg:pt-40" />
    </main>
  );
}
