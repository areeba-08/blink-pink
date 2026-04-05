import {ProductCard} from "@/components/productCard/productCard"
import {products} from "@/components/data/productsData/data"
import Link from "next/link"

const luxuriosProducts = products.filter(product => product.tag.includes("Luxurious"))

const LuxuriousProducts = () => {
  return (
    <div className="pl-5 md:pl-20 py-10 space-y-8 bg-gray-100">
      <h4 className="text-xl md:text-2xl italic font-light">Range Of Luxurious Bracelets</h4>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-1">
      {luxuriosProducts.map((product, index) => (
        <div key={index} className="shrink-0">
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            slug={product.slug}
          />
        </div>
      ))}
      </div>
      <Link 
      href="/newArrivals" 
      className="underline text-black flex items-center justify-center font-light cursor-pointer">
       View all
      </Link>
    </div>
  )
}

export default LuxuriousProducts;
