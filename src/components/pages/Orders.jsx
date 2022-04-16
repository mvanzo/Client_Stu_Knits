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
                <p>{order.customer}</p>
                <p>Order ID: {order.id}</p>
                <br />
            </div>
        )
    })

    if (currentUser) {
        const filteredOrders = orders.filter(item=>{
            console.log(item.billing_details.email)
            if (item.billing_details.email == currentUser.email) {
                return true
            }
        })

        const userOrders = filteredOrders.map((order, idx)=> {
            return(
                <div key={idx}>
                    <br />
                    {/* <p>{order.customer_details}</p> */}
                    <p>Order Total: ${order.amount/100}</p>
                    <p>Name: {order.billing_details.name}</p>
                    <p>email: {order.billing_details.email}</p>
                    <p>{order.customer}</p>
                    <p>Order ID: {order.id}</p>
                    <br />
                </div>
            )
        })
    }

    // const userOrders = filteredOrders.map((order, idx)=> {
    //     return(
    //         <div key={idx}>
    //             <br />
    //             {/* <p>{order.customer_details}</p> */}
    //             <p>Order Total: ${order.amount/100}</p>
    //             <p>Name: {order.billing_details.name}</p>
    //             <p>email: {order.billing_details.email}</p>
    //             <p>{order.customer}</p>
    //             <p>Order ID: {order.id}</p>
    //             <br />
    //         </div>
    //     )
    // })

    // console.log(userOrders)

    return(
        <div>
            <h1>this is the orders page</h1>
            {currentUser && currentUser.admin == true ? adminOrders : 'no orders to review'}
            {/* {filteredOrders} */}
            {currentUser ? userOrders : '' }

            {currentUser }

        </div>
    )
}