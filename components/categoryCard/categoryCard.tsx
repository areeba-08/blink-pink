import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type CategoryCardProps = {
  image: string
  title: string
  slug: string
  className?: string
  titleClassName?: string
}

export function CategoryCard({
  image,
  title,
  slug,
  className,
  titleClassName,
}: CategoryCardProps) {
  return (
    <Link href={`/product/${slug}`}>
      <div className={`w-full h-full cursor-pointer ${className}`}>

        <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-xl bg-pink-200 hover:scale-101 transition-transform "
        />
        </div>
        <h4 className={`mt-2 hover:underline flex items-center gap-2 ${titleClassName}`}>
          {title}
          <ArrowRightIcon className="h-4 w-4 font-light"/>
        </h4>
      </div>
    </Link>
  )
}