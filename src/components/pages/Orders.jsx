import { useState, useEffect } from "react"
import axios from "axios"

export default function Orders({ currentUser }) {
    const [orders, setOrders] = useState([])
    
    useEffect( ()=>{
        findOrders()
    }, [])

    const findOrders = async () => {
        let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/findorders`)
        console.log(response.data)
        setOrders(response.data)
    }

    if (currentUser && currentUser.admin == true) {
        console.log('admin is logged in ')
    } else if (currentUser && currentUser.admin == true) {
        console.log('non admin is logged in')
    } else {
        console.log('not logged in')
    }

    // admin mapping of orders data

    const adminOrders = orders.map((order, idx)=> {
        return(
            <div key={idx}>
                <br />
                {/* <p>{order.customer_details}</p> */}
                <p>Order Total: ${order.amount/100}</p>
                <p>Name: {order.billing_details.name}</p>
                <p>email: {order.billing_details.email}</p>
                <p>Order ID: {order.id}</p>
                <br />
            </div>
        )
    })
    

    return(
        <div>
            <h1>this is the orders page</h1>
            {currentUser && currentUser.admin == true ? adminOrders : 'nothing to see here'}
        </div>
    )
}