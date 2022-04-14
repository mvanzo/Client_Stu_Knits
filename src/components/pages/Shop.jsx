import { useState, useEffect } from "react"
import axios from "axios"
import Cart from "../Cart"

export default function Shop({ cart, addToCart }){
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
            <div className="product ui-card" key={idx}>
                <img src={product.imgUrl} alt={product.name} />
                <div className="product-info description">
                    <p>{product.description}</p>
                    <button onClick={() => addToCart(product)}>Add to cart</button>
                    <a href={'/checkout/'+idx}>Place Order</a>
                    <p>{product.name}</p>
                    <p><strong>${product.price}</strong></p>
                </div>
            </div>
        )
    })

    return(
        <div>
            <h1>Shopping Page</h1>
            <Cart cart={cart}/>
            <main>
                <h1>Featured Products</h1>
                    <div className="products">
                    {mappedProducts}
                </div>
            </main>
        </div>
    )
}