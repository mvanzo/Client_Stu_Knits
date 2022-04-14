export default function Checkout({ cart }){

    const handleCheckout = () => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/api-v1/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: cart
            })
        })
            .then(res=> {
                if(res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                // console.log(url)
                window.location = url
            })
            .catch(e => {
                console.error(e.error)
            })
    }

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
        <div>
            <h1>Purchase Page</h1>
            {displayCart.length == 0 ? 'you have no items in your cart' : 
            <div>
                {displayCart}
                <button onClick={handleCheckout}>Checkout</button>
            </div>
            }
        </div>
    )
}