import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo/logo1.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
    className="w-full bg-white px-5 md:px-20 py-5 text-sm mt-8">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">  
     <div>
      <Image 
      src={logo} 
      alt="Logo" 
      width={100} 
      height={50} 
      className="mb-5" />
      <ul className="flex items-center gap-5">
       <li><FontAwesomeIcon icon={faFacebook} className="h-5 w-5"/></li>
       <li><FontAwesomeIcon icon={faInstagram} className="h-5 w-5"/></li>
       <li><FontAwesomeIcon icon={faYoutube} className="h-5 w-5"/></li>
       <li><FontAwesomeIcon icon={faTiktok} className="h-5 w-5"/></li>
      </ul> 
     </div>

     {/* Quick Links */}
     <div>
      <h3 className="font-bold mb-2">Quick Links</h3>
      <ul className="font-light">
       <li><Link href="/about">All Products</Link></li>
       <li><Link href="/services">Categories</Link></li>
       <li><Link href="/contact">Return & Exchange Policy</Link></li>
       <li><Link href="/contact">Shipping Policy</Link></li>
       <li><Link href="/contact">Privacy Policy</Link></li>
      </ul>  
     </div>

     {/* Contact Us */}
     <div>
      <h3 className="font-bold mb-2">Contact Us</h3>
      <ul className="font-light">
       <li>+92 309 9807731</li>
       <li>hello.swankybymahnoor@gmail.com</li>
      </ul>  
     </div>

     {/* Our Story */}
     <div>
      <h3 className="font-bold mb-2">Our Story</h3>
      <p className="font-light">
        We are a team of passionate designers and developers who love creating beautiful and functional websites.
      </p> 
     </div>
     </div>

     {/* Copyright */}
     <div className="flex items-center justify-center mt-15">
      © 2026 Swanky. All rights reserved.  
     </div>
    </div>
  )
}

export default Footer;
