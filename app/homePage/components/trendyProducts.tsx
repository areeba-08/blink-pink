import ProductCard from "@/components/productCard/productCard";

const TrendyProducts = () => {
  return (
    <div className="px-20 py-10  space-y-8">
      <h4 className="text-2xl italic font-light">Discover The Trendiest Products</h4>
      <ProductCard/>
      <span className="underline text-black flex items-center justify-center font-light cursor-pointer">
       View all
      </span>
    </div>
  )
}

export default TrendyProducts;
