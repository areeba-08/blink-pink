import Image from "next/image";
import product from "@/public/heroSection/IMG-0267.webp"

type ProductCardProps = {
    image : string;
    title: string;
    price : number;
    oldprice?: number;
}

export function ProductCard({
image,
title, 
price, 
oldPrice
} : ProductCardProps) {
  return (
    <div className="text-sm cursor-pointer">
      <Image 
      src={product} 
      alt="Product Image"
      className="h-65 w-65 bg-pink-200 rounded-xl hover:scale-101 transition-transform mb-4"/>
      <h4 className="hover:underline mb-2 font-light">Dream Girl Ring</h4>
      <div>
       {oldPrice && <span className="line-through text-gray-500 mr-2">Rs.199.00 PKR</span>} 
      <span className="text-base">From Rs.149.00 PKR</span>
      </div>
    </div>
  )
}
