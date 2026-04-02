import {ProductCard} from "@/components/productCard/productCard"
import {products} from "@/components/data/productsData/data"
import { Button } from "@/components/ui/button"

const luxuriosProducts = products.filter(product => product.tag.includes("Luxurious"))

const RecomendationSection = () => {
  return (
    <div className="pl-5 md:pl-20 py-10 space-y-8 mt-8">
      <h4 className="text-xl md:text-4xl italic">Bracelets</h4>
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
      <Button 
      className="flex items-center justify-center font-light cursor-pointer w-30 h-13">
       View all
      </Button>
    </div>
  )
}

export default RecomendationSection;
