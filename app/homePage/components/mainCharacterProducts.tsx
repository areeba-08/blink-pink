import { products } from "@/components/productsData/data";
import {ProductCard}  from "@/components/productCard/productCard";

const MainCharacterProducts = () => {
  return (
    <div className="px-20 py-10 h-300 space-y-8">
      <h4 className="text-2xl italic font-light">Dream Big, Stack Bold</h4>   
      <div className="grid grid-cols-4 gap-2">
       {products.map((product, index) => (
        <div key={index}>
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
