import { tProduct } from "@/types/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: tProduct }) => {

    return <div>
        <Image width={300} height={200} alt={product.title+" "+"image"} src={product.images[0]} />
    </div>

}

export default ProductCard