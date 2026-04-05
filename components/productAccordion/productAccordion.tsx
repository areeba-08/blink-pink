"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { shippingPolicy } from "@/components/content/policies/shipping";
import { exchangePolicy } from "@/components/content/policies/exchange";
import { careGuide } from "@/components/content/policies/care";
import { Heart, Snowflake, Truck, Undo, Undo2, UndoIcon } from "lucide-react";

type Product = {
  name: string;
  material: "stainless" | "silver925" | "clawClips";
};

export default function ProductAccordion({ product }: { product: Product }) {
  const care = careGuide[product.material];

  return (
    <Accordion type="single" collapsible className="w-full mt-10">

      {/* MATERIAL */}
      <AccordionItem value="material">
        <AccordionTrigger 
        className="text-base font-light flex items-center gap-2 ">
         <Snowflake 
         className="w-5 h-5"
         strokeWidth={1}/>   
         Material
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-gray-600">
            This product is made from <strong>{product.material}</strong>.
            Exact composition is mentioned in product details.
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* CARE */}
      <AccordionItem value="care">
        <AccordionTrigger 
        className="text-base font-light  flex items-center gap-2">
         <Heart
         className="w-5 h-5"
         strokeWidth={1}/>    
         Care Instructions
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-sm text-gray-600 space-y-1">
            {care?.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* SHIPPING */}
      <AccordionItem value="shipping">
        <AccordionTrigger 
        className="text-base font-light  flex items-center gap-2 ">
         <Truck
         className="w-5 h-5"
         strokeWidth={1}/>   
         Shipping & Delivery
        </AccordionTrigger>
        <AccordionContent>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Delivery: {shippingPolicy.deliveryTime}</li>
            <li>Charges: {shippingPolicy.charges}</li>
            <li>{shippingPolicy.tracking}</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      {/* EXCHANGE */}
      <AccordionItem value="exchange">
        <AccordionTrigger 
        className="text-base font-light gap-2">
         <Undo2
         className="w-5 h-5"
         strokeWidth={1}/>    
         Exchange Policy
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-medium">Allowed:</p>
            <ul>
              {exchangePolicy.allowed.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            <p className="font-medium mt-2">Not Allowed:</p>
            <ul>
              {exchangePolicy.notAllowed.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  );
}