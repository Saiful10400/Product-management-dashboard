const getProduct = async (id: string | undefined = undefined, limit: number = 100, skip: number = 0) => {
    const url = `https://dummyjson.com/products/${id ? id : ""}?limit=${limit}&skip=${skip}`
    const response = await fetch(url)

    if (response.ok) {
        return await response.json()
    }
    else {

        throw new Error(response.statusText, { cause: response.status })
    }

}


export default getProduct