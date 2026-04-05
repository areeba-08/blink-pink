import { products } from "@/components/data/productsData/data";
import { Product } from "./components/product";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return <div>Product not found</div>
  }
 
  return (
    <div className="px-20 border-t border-gray-200">
     <Product
        className="mt-8"
        image={product.image}
        title={product.title}
        price={product.price}
        oldPrice={product.oldPrice} material={"stainless"}     />
    </div>
  )
}