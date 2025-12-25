import { tProduct } from "@/types/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: tProduct }) => {

    return <div className="bg-white text-center">
        <Image className="inline-block h-[60%] object-contain" width={300} height={200} alt={product.title + " " + "image"} src={product.images[0]} />
        <h1 className="text-black font-bold">{product.title}</h1>
    </div>

}

export default ProductCard