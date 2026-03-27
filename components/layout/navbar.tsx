"use client"

import { 
  ChevronLeft, 
  ChevronRight, 
  Handbag, 
  Search,
  User
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/logo1.avif";

const Navbar = () => {
  return (
   <div>

    {/* Anouncement Bar */}
    <div
     className="h-10 w-full bg-[#bc3fcc] text-white text-sm flex items-center justify-between px-20">
      <ChevronLeft className="w-4 h-4"/>   
      <p>Use code LOVESWANKY for extra off</p>
      <ChevronRight className="w-4 h-4"/> 
    </div>

    {/* NavBar */}
    <div
     className="h-23 w-full bg-white text-black flex items-center justify-between px-20">
      <div className="flex items-center">  
      <Image 
      src={logo} 
      alt="Logo" 
      width={100} 
      height={50} />  
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/homePage">Home</Link>
           </NavigationMenuLink> 
          </NavigationMenuItem> 
          <NavigationMenuItem>
           <NavigationMenuTrigger>
            Shop
           </NavigationMenuTrigger> 
           <NavigationMenuContent>
            <ul className="">
             <Link href="/home" className="px-4 py-2 hover:bg-pink-200">Hair Accessories</Link>
             <Link href="/home" className="px-4 py-2 hover:bg-pink-200">Jewellery</Link>
             <Link href="/home" className="px-4 py-2 hover:bg-pink-200">Sunglasses</Link>
             <Link href="/home" className="px-4 py-2 hover:bg-pink-200">Bags</Link>
            </ul>
           </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/home">New Arrivals</Link>
           </NavigationMenuLink> 
          </NavigationMenuItem> 
          <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/home">Contact</Link>
           </NavigationMenuLink> 
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">
        <Search className="h-5 w-5"/>
        <User className="h-5 w-5"/>
        <Handbag className="h-5 w-5"/>
      </div> 
    </div>

   </div>
    )
}

export default Navbar;
