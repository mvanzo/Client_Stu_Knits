import { Link } from "react-router-dom"

export default function Cart({ cart }) {
    const displayCart = cart.map((product, idx)=> {
        return(
            <div key={idx}>
                <h1>
                {product.name} || 
                {product.quantity}
                </h1>
            </div>
        )
    })

    return(
        <>
        <h5>this is a cart</h5>
        {cart.length == 0 ? 'your cart is empty ' : displayCart}
        {cart.length >0 ? <Link to='/checkout'>Checkout</Link> : ''}
        </>
    )
}