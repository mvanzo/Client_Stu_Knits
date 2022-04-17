import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate } from "react-router-dom"

export default function Login({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [msg, setMessage] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            // post to the backend with the form data to login
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`,
                form
            )
            // decode the token that is sent to use
            const { token } = response.data
            const decoded = jwt_decode(token)
            // save the token in localstorage
            localStorage.setItem("jwt", token)
            // set the app state to the logged in user
            setCurrentUser(decoded)
        } catch (err) {
            // handle errors suchs as wrong credentials
            if (err.response.status === 400) {
                console.log(err.response.data)
                setMessage(err.response.data.msg)
            }
            console.log(err)
        }
    }

    if (currentUser) return <Navigate to="/" />

    return (
        <div className="form content">
            <p>{msg ? `the server has a message for you: ${msg}` : ""}</p>

            <form onSubmit={handleFormSubmit}>
                <br />
                <h4>Login Form:</h4>
                <div className="form-group">
                    <label className="form-label mt-4" htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        placeholder="user@domain.com"
                        type="email"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        value={form.email}
                    />
                </div>

                <div>
                    <label className="form-label mt-2" htmlFor="password">
                        Password:
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="enter your password..."
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        value={form.password}
                    />
                </div>

                <input className="btn btn-primary" type="submit" />

				<div className="mt-5">
					<h5>If you don't already have an account, sign up for one <a style={{ textDecoration: 'none' }} href="/register">here</a></h5>
				</div>	
            </form>

        </div>
    )
}
