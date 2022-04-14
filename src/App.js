import "./App.css"
import Home from "./components/pages/Home"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Shop from "./components/pages/Shop"
import Checkout from "./components/pages/Checkout"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"

export default function App() {
    const [cart, setCart] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const addToCart = (product) => {
        // console.log(product)
		const inCart = cart.find((x) => x.name === product.name)
		console.log(inCart)
        if (inCart){
            console.log('already in cart, add one to quantity')
			setCart(
				cart.map((x)=> 
					x.name === product.name ? {...inCart, quantity: inCart.quantity + 1} : x
				)
			)
        } else {
			console.log('adding to cart')
			setCart([...cart, {...product, quantity: 1}])
		}
    }

    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                    <Route
                        path="/shop"
                        element={<Shop cart={cart} addToCart={addToCart} />}
                    />
                    <Route path="/checkout" element={<Checkout cart={cart}/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}
