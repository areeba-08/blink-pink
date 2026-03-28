import Image from "next/image"
import Link from "next/link"

type ProductCardProps = {
  image: string
  title: string
  price: number
  oldPrice?: number
  slug: string

  className?: string
  titleClassName?: string
  priceClassName?: string
}

export function ProductCard({
  image,
  title,
  price,
  oldPrice,
  slug,
  className,
  titleClassName,
  priceClassName,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`}>
      <div className={`text-sm cursor-pointer mb-4 ${className}`}>
        <Image
          src={image}
          alt={title}
          width={270}
          height={270}
          className="rounded-xl bg-pink-200 hover:scale-101 transition-transform mb-4"
        />

        <h4 className={`mb-2 font-light hover:underline ${titleClassName}`}>
          {title}
        </h4>

        <div>
          {oldPrice && (
            <span className="line-through font-light text-gray-500 mr-2">
              Rs. {oldPrice} PKR
            </span>
          )}

          <span className={`text-base font-light ${priceClassName}`}>
            Rs. {price} PKR
          </span>
        </div>
      </div>
    </Link>
  )
}