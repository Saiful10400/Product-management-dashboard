import AllProduct from "@/component/AllProduct"
import { tProduct } from "@/types/product"
import getProduct from "@/utils/getProduct"

const Dashboard = async () => {

    const products: tProduct[] = (await getProduct(undefined, 200, 0)).products



    return (
        <div>
            <AllProduct products={products} />
        </div>
    )
}


export default Dashboard