"use client"

import { 
  ChevronLeft, 
  ChevronRight, 
  Handbag, 
  MenuIcon, 
  Search,
  SearchIcon,
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
   <div>
    {/* Anouncement Bar */}
    <div
     className="h-10 w-screen bg-[#bc3fcc] text-white text-sm flex items-center justify-between px-10 md:px-20">
      <ChevronLeft className="w-4 h-4"/>   
      <p>Use code LOVESWANKY for extra off</p>
      <ChevronRight className="w-4 h-4"/> 
    </div>

    {/*Desktop NavBar */}
    <div
     className="h-23 w-full bg-white text-black md:flex items-center justify-between md:px-20 hidden">
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
            <Link href="/homePage" className="font-extralight hover:bg-transparent">Home</Link>
           </NavigationMenuLink> 
          </NavigationMenuItem> 
          <NavigationMenuItem>
           <NavigationMenuTrigger>
            Shop
           </NavigationMenuTrigger> 
           <NavigationMenuContent>
            <ul className="grid grid-rows-1 rounded-none w-40">
             <Link href="/home" className="px-4 py-2 text-sm font-light hover:underline">Hair Accessories</Link>
             <Link href="/home" className="px-4 py-2 text-sm font-light hover:underline">Jewellery</Link>
             <Link href="/home" className="px-4 py-2 text-sm font-light hover:underline">Sunglasses</Link>
             <Link href="/home" className="px-4 py-2 text-sm font-light hover:underline">Bags</Link>
            </ul>
           </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/newArrivals" className="font-extralight hover:bg-transparent">New Arrivals</Link>
           </NavigationMenuLink> 
          </NavigationMenuItem> 
          <NavigationMenuItem>
           <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact" className="font-extralight hover:bg-transparent">Contact</Link>
           </NavigationMenuLink> 
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <div className="flex items-center gap-3">

        <Search className="h-5 w-5"/>
        <Link href="/profile">
          <User className="h-5 w-5"/>
        </Link>
        <Link href="/cart">
        <Handbag className="h-5 w-5"/>
        </Link>
      </div> 
    </div>


    {/* Mobile NavBar */}
    <div
    className="h-23 w-screen md:hidden flex items-center justify-between px-5">
    <div>  
    <Sheet>
      <SheetTrigger asChild>
       <Button className="bg-transparent text-black h-10 w-10">
        <MenuIcon/>
      </Button>
      </SheetTrigger>
      <SheetContent 
      side="left">
       <SheetHeader>
        <SheetTitle>Home</SheetTitle>
       </SheetHeader>
      </SheetContent>
    </Sheet> 
    </div>

    {/* Logo */}
    <div>
     <Image 
      src={logo} 
      alt="Logo" 
      width={100} 
      height={50} />  
    </div> 

    <div className="flex items-center gap-3">
     <Search className="h-6 w-6"/>
     <Handbag className="h-6 w-6"/>
    </div> 
    </div>
   </div>
    )
}

export default Navbar;
