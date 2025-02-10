// lib/posts.ts
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
  content: string;
};

export async function getAllPosts(): Promise<Post[]> {
  // Here you would fetch from your data source (API, database, etc.)
  return [
    {
      slug: "enhanced-due-diligence",
      url: "/enhanced-due-diligence",
      image: {
        src: "/use-case-image.png",
        alt: "Use case image",
      },
      imageMobile: {
        src: "/use-case-image.png",
        alt: "Use case image",
      },
      date: "January 20, 2024",
      title: "Enhanced due diligence for credit industry",
      description: "Lorem ipsum dolor sit amet consectetur...",
      content: "Full post content here...",
    },
    // Add more posts as needed
  ];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}
