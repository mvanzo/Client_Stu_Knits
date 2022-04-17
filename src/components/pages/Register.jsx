import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate } from "react-router-dom"

export default function Register({ currentUser, setCurrentUser }) {
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
    })
    const [msg, setMsg] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (form.password === form.passwordConfirmation) {
                // remove unneeded data in the form pre-request
                delete form.passwordConfirmation
                // do the axios since the passwords match
                const response = await axios.post(
                    `${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`,
                    form
                )
                // get the token from the response
                const { token } = response.data
                // set the token in local storage
                localStorage.setItem("jwt", token)
                // decode the token
                const decoded = jwt_decode(token)
                // log the user in
                setCurrentUser(decoded)
            } else {
                setMsg("the two passwords you entered do not match 🥴")
            }
        } catch (err) {
            if (err.response.status === 409) {
                setMsg(err.response.data.msg)
            } else {
                console.log(err)
            }
        }
    }

	if (currentUser) return <Navigate to='/' />

    return (
        <div className="form">
			{/* {currentUser ? <Navigate to='/' /> : 'please log in'} */}

            <p>{msg}</p>

            <form onSubmit={handleSubmit}>
                <br />
                <h4>Register a new account</h4>
                <br />
                <div className="form-group">
                    <label className="form-label mt-2" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        placeholder="enter your email..."
                    />
                </div>

                <div>
                    <label className="form-label mt-2" htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        placeholder="enter your name..."
                    />
                </div>

                <div>
                    <label className="form-label mt-2" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        placeholder="enter your password..."
                    />
                </div>
                <div>
                    <label className="form-label mt-2" htmlFor="passwordConfirmation">
                        Confirm Your Password:
                    </label>
                    <input
                        type="password"
                        id="passwordConfirmation"
                        value={form.passwordConfirmation}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                passwordConfirmation: e.target.value,
                            })
                        }
                        placeholder="re-enter your password..."
                    />
                </div>

                <input className="btn btn-primary mt-2" type="submit" />

                <div className="mt-5">
					<h5>If you already have an account, log in <a style={{ textDecoration: 'none' }} href="/login">here</a></h5>
				</div>	
            </form>
        </div>
    )
}
