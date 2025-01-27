// app/products/page.tsx
import { sanityFetch } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { GET_IN_TOUCH_QUERY } from "@/sanity/lib/queries";
import { Products } from "@/components/products/products";
import { AboutUs } from "@/components/products/about-us";
import { ABOUT_US_QUERY } from "@/sanity/lib/queries/aboutUs";
import { GetInTouch } from "@/components/GetInTouch";

export default async function ProductsPage() {
  const [productsData, aboutUsData, getInTouchData] = await Promise.all([
    sanityFetch({
      query: PRODUCTS_QUERY,
    }),
    sanityFetch({
      query: ABOUT_US_QUERY,
    }),
    sanityFetch({
      query: GET_IN_TOUCH_QUERY,
    }),
  ]);

  return (
    <>
      <Products {...productsData} />
      <AboutUs {...aboutUsData} />
      <GetInTouch {...getInTouchData} />
    </>
  );
}
