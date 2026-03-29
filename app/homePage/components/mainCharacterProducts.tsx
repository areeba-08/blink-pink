import { products } from "@/components/data/productsData/data";
import {ProductCard}  from "@/components/productCard/productCard";

const MainCharacterProducts = () => {
  return (
    <div className="pl-5 md:px-20 py-10 md:h-320 space-y-8">
      <h4 className="text-2xl italic font-light">Dream Big, Stack Bold</h4>   
      <div className="md:grid md:grid-cols-4 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-1">
       {products.map((product, index) => (
        <div key={index}  className="shrink-0">
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
      <span className="underline text-black flex items-center justify-center font-light cursor-pointer">
       View all
      </span>
    </div>
  )
}

export default MainCharacterProducts;
