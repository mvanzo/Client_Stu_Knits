export default function Cart ({ cart, setCart, addToCart }){

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

    const removeFromCart = (product) => {
		const inCart = cart.find((x) => x.name === product.name)
        if (inCart.quantity === 1) {
            setCart(cart.filter((x) => x.name !== product.name))
        }
        else {
			setCart(
				cart.map((x)=> 
					x.name === product.name ? {...inCart, quantity: inCart.quantity - 1} : x
				)
			)
        }
    }

    const mappedCart = cart.map((product, idx)=> {
            return(
                <tr key={idx}>
                    <td>{product.name}</td>
                    <td>${product.priceInCents/100}</td>
                    <td>{product.quantity}</td>
                    <td>
                        <button onClick={() => addToCart(product)} className="btn btn-primary">+</button>
                        <button onClick={() => removeFromCart(product)} className="btn btn-danger">-</button>
                    </td>
                </tr>
            )
    })

    const cartTable = 
        <div>
            <table class="table table-striped w-75" style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mappedCart}
                </tbody>
            </table>
        </div>


    return(
        <div className='mx-4 my-3'>
            <h1>Your Cart</h1>
            
            {mappedCart.length == 0 ? 'you have no items in your cart' : 
            <div>
                {cartTable}
                <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
            </div>
            }
        </div>
    )
}