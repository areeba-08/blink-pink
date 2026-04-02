import Image from "next/image";
import bands from "@/public/productsImages/bands.webp"
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CartProducts = () => {
  return (
    <div>
    <div  className="md:px-20 px-5 py-10 border-t border-gray-200 space-y-5">
      <div className="flex items-center justify-between">  
      <h1 className="text-4xl font-light">Your Cart</h1>
      <span className="underline font-light">Continue Shopping</span>
      </div>

      {/* Desktop Cart Table */}
      <div>
        <ul 
        className="md:flex justify-between font-light text-sm capitalize border-b border-gray-200 text-gray-500 hidden">
          <li>Product</li>
          <div className="flex justify-between gap-80">
          <li>Quantity</li>
          <li>Total</li>
          </div>  
        </ul>
      </div>

      {/* Mobile Cart Table */}
      <div>
        <ul 
        className="md:hidden flex justify-between font-light text-sm capitalize border-b border-gray-200 text-gray-500">
          <li>Product</li>
          <li>Total</li> 
        </ul>
      </div>

      <div className="flex justify-between">
      {/* Product */}
       <div className="flex gap-10 mt-10">
        <Image 
        src={bands}
        alt="product" 
        width={120} 
        height={120} />
        <div className="text-sm">
         <div className="font-light hover:underline">Candy Hair Ties</div>
         <div className="font-light ">Rs. 199</div> 
        </div>
       </div>

      <div className="flex justify-between gap-50">
      {/* Quantity */}
      <div className="flex items-center gap-5">
       <div className="flex items-center justify-between w-35 border border-black px-3 py-2 font-light">
        <Minus className="w-5 h-5 cursor-pointer" />
        <span className="mx-2">1</span>
        <Plus className="w-5 h-5 cursor-pointer" />
       </div>
       <div><Trash2 className="w-4 h-4 cursor-pointer" /></div> 
      </div>

      {/* Total */}
      <div className="flex items-center">
        Rs. 199
      </div>
      </div>
      </div>
    </div>

    {/* Check Out Section */}
      <div>

        {/* Shipping Instruction Bar */}
       <div>
        <h2 
        className="h-10 w-full bg-[#bc3fcc] text-white text-lg flex items-center justify-center px-10 md:px-20">
        To ensure smooth delivery, we provide shipping on orders of Rs 550 or more.
        </h2>
       </div>

       {/* CheckOut  */}
       <div className="px-20 space-y-3 mt-5 justify-items-end">
       <div className="flex items-center gap-6">
        <div>Estimated total</div>
        <div className="font-light">Rs. 199 PKR</div>
       </div>
       <div className="font-light text-xs">
        Taxes, discounts and shipping calculated at checkout.
       </div>
       <Button className="bg-[#bc3fcc] text-white mt-5 px-10 py-3 w-80 h-13 flex justify-items-end">
        Check Out
       </Button>
      </div>
      </div>
    </div>
  )
}

export default CartProducts;
