import { products } from "@/components/data/productsData/data"
import Sortbar from "@/components/layout/sortbar";
import { ProductCard } from "@/components/productCard/productCard"

const newArrivals = products.filter(product => product.tag.includes("New-Arrival"));

const NewArrivals = () => {
  return (
    <div className="md:px-20 px-5 border-t border-gray-200">
      <h1 className="my-8 md:text-4xl text-3xl font-light">New Arrivals</h1>

      {/* Filter & Sort Bar */}
      <Sortbar/>

      {/* Products Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-0.5 md:gap-2">
      {newArrivals.map((product, index) => (
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
    </div>
  )
}

export default NewArrivals;
