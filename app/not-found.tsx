'use client'

import { usePathname } from "next/navigation"



const Notfound =  () => {
    const pathname = usePathname()
 
    const pathArr=pathname.split("/")
    console.log(pathArr)

    const errorMessage=pathArr.includes("product")?pathArr[2].split("_").join(" ")+" Product not found":"You are on wrong Direction"
    return <h1 className="text-center mt-28">{errorMessage}</h1>
}

export default Notfound