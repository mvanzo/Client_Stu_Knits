import { useState, useEffect } from "react"
import axios from "axios"

export default function Orders({ currentUser }) {
    const [orders, setOrders] = useState([])
    
    useEffect( ()=>{
        findOrders()
    }, [])

    const findOrders = async () => {
        let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/findorders`)
        setOrders(response.data)
    }

    let userOrders = null

    if (currentUser && currentUser.admin == false) {
        const filteredOrders = orders.filter(item=>{
            // console.log(item.billing_details.email)
            if (item.billing_details.email == currentUser.email) {
                return true
            }
        })

        userOrders = filteredOrders.map((order, idx)=> {
            return(
                <tr key={idx}>
                    <td>{order.billing_details.name}</td>
                    <td>{order.billing_details.email}</td>
                    <td>${order.amount/100}</td>
                    <td>{order.id}</td>
                </tr>
            )
        })
    }

    const adminViewOrders = orders.map((order, idx)=> {
        return(
            <tr key={idx}>
                <td>{order.billing_details.name}</td>
                <td>{order.billing_details.email}</td>
                <td>${order.amount/100}</td>
                <td>{order.id}</td>
            </tr>
        )
    })

    const ordersTable = 
    <div>
        <table class="table table-striped" style={{ border: '1px solid black' }}>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Order Total</th>
                    <th scope="col">Order ID</th>
                </tr>
            </thead>
            <tbody>
                {currentUser && currentUser.admin == true ? adminViewOrders : userOrders}
            </tbody>
        </table>
    </div>

    return(
        <div className="center w-75 mt-4 content">
            {ordersTable}
        </div>
    )
}