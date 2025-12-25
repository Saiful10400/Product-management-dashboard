import { tProduct } from "@/types/product"
import ProductCard from "@/ui/productCard"

const AllProduct = ({products}: {products:tProduct[]}) => {

   
 
    return <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {
            products?.map(item=><ProductCard key={item.id+item.title} product={item}/>)
        }
    </div>
    


}


export default AllProduct