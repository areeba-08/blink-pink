import Image from 'next/image';
import heroSectionImage from "@/public/heroSection/IMG-0267.webp"

const heroSection = () => {
  return (
    <div className="h-60 w-full bg-pink-100">
      <Image 
      src={heroSectionImage} 
      alt="Hero Image" 
      className="w-full h-full object-cover" />
    </div>
  )
}

export default heroSection;
