import { waitForElementToBeRemoved } from "@testing-library/react"
import React, { useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../../base.js"
import { AuthContext } from "../auth"
import * as firebase from "firebase/app"
import "firebase/auth"

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault()
            const {email, password} = event.target.elements

            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                console.error(error)
            }
        },
        [history]
    )

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        app.auth().signInWithPopup(provider).catch(error => {
          console.error(error)
        })
    }

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/"/>
    }

    return (
        <div>
          <h1>Log in</h1>
          <form onSubmit={handleLogin}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Log in</button>
          </form>
          <button onClick={() => handleGoogleLogin()}>Login with Google</button>
        </div>
    )
}

export default Login
