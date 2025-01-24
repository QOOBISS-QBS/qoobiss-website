// app/products/page.tsx
import { sanityFetch } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { Products } from "@/components/products/products";

export default async function ProductsPage() {
  const [productsData] = await Promise.all([
    sanityFetch({
      query: PRODUCTS_QUERY,
    }),
  ]);

  return (
    <>
      <Products {...productsData} />
    </>
  );
}
