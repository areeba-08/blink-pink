import { CategoryCard } from "@/components/categoryCard/categoryCard";
import { category } from "@/components/data/categoryData/data";

const featuredProducts = category[0];
const secondaryProducts = category.slice(1, 3);

const ProductGrid = () => {
  return (
    <div className="px-5 md:px-20 md:py-10 h-170 md:h-230 space-y-8">
      <h4 className="text-xl md:text-2xl italic font-light">
        Accessories For Every Mood
      </h4>
      
      {/* Big Grid Card */}
      <div className="grid md:grid-cols-[2fr_1fr] grid-rows[2fr_1fr] gap-6 h-220 md:h-180">
        <CategoryCard {...featuredProducts}/>

        {/* Small Two Cards */}
        <div className="grid grid-cols-2 gap-3 md:gap-9 mt-3 h-45">
          {secondaryProducts.map((item)=>(
          <CategoryCard key={item.slug} {...item}/>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default ProductGrid;
