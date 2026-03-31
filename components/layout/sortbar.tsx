import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "../ui/checkbox";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "lucide-react";

const Sortbar = () => {
  return (
    <div className="flex justify-between mb-6">
      {/* Filter   */}
      <div>  
      <span className="font-light text-sm">Filter:</span>

      {/* Availabilty Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
         <Button className="bg-transparent hover:underline text-black font-light">
         Availabilty
         <ChevronDown className="h-5 w-5"/>
         </Button>   
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 h-30 rounded-none">

         <div className="flex justify-between font-extralight text-sm p-2 border-b border-gray-200">   
         <span>0 Selected</span>
         <span className="underline cursor-pointer">Reset</span>
         </div> 
         {/* InStock CheckBox */}
         <div className=" space-y-3 mt-3 px-4">
         <div className="flex gap-4 ">   
         <Checkbox className="rounded-none"/>
         <Label className="ml-2 font-extralight">In Stock(25)</Label>
         </div>  
         {/* Out of Stock CheckBox */}
         <div className="flex gap-4">   
         <Checkbox className="rounded-none"/>
         <Label className="ml-2 font-extralight">Out of Stock(10)</Label>
         </div>
         </div> 
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Price Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
         <Button className="bg-transparent hover:underline text-black font-light">
         Price
         <ChevronDown className="h-5 w-5"/>
         </Button>   
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-90 h-30 rounded-none">

         <div className="flex justify-between font-extralight text-sm p-2 border-b border-gray-200">   
         <span>The highest price is Rs.2,499.00</span>
         <span className="underline cursor-pointer">Reset</span>
         </div> 
         {/* InStock CheckBox */}
         <div className="flex items-center space-x-3 mt-3 px-4">
         <div className="flex gap-2">
         <span className="text-xl">Rs.</span>      
         <Input 
         placeholder="From" 
         className="rounded-none border border-black w-30 h-10"/>
         </div>  
         {/* Out of Stock CheckBox */}
         <div className="flex gap-2">   
         <span className="text-xl">Rs.</span>      
         <Input 
         placeholder="To" 
         className="rounded-none border border-black w-30 h-10"/>
         </div>
         </div> 
        </DropdownMenuContent>
      </DropdownMenu>
      </div>


      {/* Sort By */}
      <div className="flex items-center gap-3">
       <span className="font-light text-sm">Sort By:</span>

       {/* BestSelling Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
         <Button className="bg-transparent hover:underline text-black font-light">
         Best Selling
         <ChevronDown className="h-5 w-5"/>
         </Button>   
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 h-60 rounded-none font-light">
        <DropdownMenuItem>Featured</DropdownMenuItem>    
        <DropdownMenuItem>Best Selling</DropdownMenuItem>
        <DropdownMenuItem>Alphabetically, A-Z</DropdownMenuItem>
        <DropdownMenuItem>Alphabetically, Z-A</DropdownMenuItem>
        <DropdownMenuItem>Price, Low to high</DropdownMenuItem>
        <DropdownMenuItem>Price, High to Low</DropdownMenuItem>
        <DropdownMenuItem>Date, old to new</DropdownMenuItem>
        <DropdownMenuItem>Date, new to old</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Number of Products */}
      <div className="text-sm font-light">28 Products</div>
      </div>
    </div>
  )
}

export default Sortbar;
