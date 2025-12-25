import { tProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: tProduct }) => {

    return <Link href={`/product/${product.title.split(" ").join("_")}?productId=${product.id}`} className="bg-white text-center">
        <Image className="inline-block h-[60%] object-contain" width={300} height={200} alt={product.title + " " + "image"} src={product.images[0]} />
        <h1 className="text-black font-bold">{product.title}</h1>
        <h1 className="text-gray-400 font-normal mt-1 text-xs ">{product.category?.toUpperCase()}</h1>
        <h1><span>Price:</span> <span>{product.price.toFixed(1) + "TK"}</span></h1>
    </Link>

}

export default ProductCard 