import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
