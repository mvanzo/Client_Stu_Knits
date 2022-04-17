import { useState, useEffect } from "react"
import axios from "axios"
import Cart from "../Cart"

export default function Shop({ cart, addToCart, currentUser }){
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
            <div className="product" key={idx}>
                <h3 className="product-name"><strong>{product.name}</strong></h3>
                <img src={product.imgUrl} alt={product.name} />
                <div className="product-info">
                    <p>{product.description}</p>
                    {/* <a href={'/checkout/'+idx}>Place Order</a> */}
                    <p>Yarn: {product.yarn}</p>
                    <p><strong>${product.priceInCents/100}</strong></p>
                    {currentUser ? 
                        <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to cart</button>
                    :
                    ''
                    }
                </div>
            </div>
        )
    })

    return(
        <div className="content">
            <main>
                <h1 className="my-3" style={{ textAlign: 'center' }}>Featured Products</h1>
                <div className="products">
                    {mappedProducts}
                </div>
            </main>
            <div>
                <Cart cart={cart}/>
            </div>
        </div>
    )
}