import ProductAccordion from "@/components/productAccordion/productAccordion"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Share } from "lucide-react"
import Image from "next/image"

type ProductCardProps = {
  image: string
  title: string
  price: number
  oldPrice?: number
  material: "stainless" | "silver925" | "clawClips" 

  className?: string
  titleClassName?: string
  priceClassName?: string
}

export function Product({
  image,
  title,
  price,
  oldPrice,
  material,
  className,
  titleClassName,
  priceClassName,
}: ProductCardProps) {
  return (
      <div className={`px-10 text-sm grid grid-cols-[2fr_1fr] ml-5 mb-3 ${className}`}>

        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="bg-pink-200 mb-4 md:w-120 md:h-120 h-40 w-40"
        />

        {/* Details */}
        <div className="space-y-2">
          <h4 
            className="mb-2 font-light text-xs capitalize hover:underline">
            SWANKY
          </h4>
          <h1 className={`text-4xl font-light ${titleClassName}`}>
            {title}
          </h1>
          <div className={`text-lg font-light mt-4 ${priceClassName}`}>
            Rs.{price.toFixed(2)} PKR
          </div>

          {/* Quantity */}
          <h6 className="mt-6 text-light">
            Quantity
          </h6>
          <div 
          className="flex items-center justify-between w-35 border border-black px-3 py-2 font-light">
          <Minus 
          className="w-5 h-5 cursor-pointer" />
          <span 
          className="mx-2">
            1
          </span>
          <Plus 
          className="w-5 h-5 cursor-pointer" />
          </div> 

          {/* Cart Button */}
          <Button className="bg-[#9b549b] text-white mt-5 px-10 py-3 w-full h-13 flex justify-items-end">
           Check Out
          </Button>

          <div className="flex items-center gap-2">
           <Share 
           className="w-3 h-3"/>
           Share 
          </div>


          {/* ✅ ACCORDION HERE */}
        <ProductAccordion 
          product={{ 
            name: title, 
            material: material 
          }} 
        />
        </div>
      </div>
  )
}