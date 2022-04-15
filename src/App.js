import "./App.css"
import Home from "./components/pages/Home"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Shop from "./components/pages/Shop"
import Checkout from "./components/pages/Checkout"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Admin from "./components/pages/Admin"
import Orders from "./components/pages/Orders"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import jwt_decode from "jwt-decode"

export default function App() {
    const [cart, setCart] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    // useEffect that handles local storage if the user navigates away from the page/refreshes
    useEffect(()=> {
        const token = localStorage.getItem('jwt')
        // if a user is found, log the user in, otherwise make sure they are logged in
        if (token) {
            setCurrentUser(jwt_decode(token))
        } else{
            setCurrentUser(null)
        }
    }, [])

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

    // logout handler function that deletes a token from local storage
    const handleLogout = () => {
        // remove the token from localStorage
        if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
        // set the user state to be null
        setCurrentUser(null)
    }
    
    return (
        <Router>
            <div>
                <Navbar handleLogout={handleLogout} currentUser={currentUser} />
                                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                    <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
                    <Route
                        path="/shop"
                        element={<Shop cart={cart} addToCart={addToCart} />}
                    />
                    <Route path="/checkout" element={<Checkout cart={cart} />} />
                    <Route path="/admin" element={<Admin currentUser={currentUser} />} />
                    <Route path="/orders" element={<Orders currentUser={currentUser} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}
