import { useState, useEffect } from "react"
import axios from "axios"

export default function Shop(){
    const [products, setProducts] = useState([])

    useEffect(()=> {
        const fetchData = async ()=> {
            const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/products`)
            console.log(result.data.findAllProducts)
            setProducts(result.data.findAllProducts)
        }
        fetchData()
    }, [])

    const mappedProducts = products.map((product, idx)=> {
        return(
            <p key={idx}>{product.name}</p>
        )
    })

    return(
        <>
        <h1>Shopping Page</h1>
        <h3>Featured Products</h3>
        {mappedProducts}
        </>
    )
}