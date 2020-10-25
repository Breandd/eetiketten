import React, { useCallback, useContext } from "react"
import { Redirect } from "react-router"
import app from "../../base.js"
import { AuthContext } from "../auth"
import * as firebase from "firebase/app"
import { Link } from 'react-router-dom'
import "firebase/auth"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements

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
    return <Redirect to="/" />
  }

  return (
    <div className="container mt-5 text-center">
      <form onSubmit={handleLogin} className="form-signin border rounded">
        <img width="72" src={require("../../assets/images/logo_notext.png")} alt="Logo" className="img-fluid" />
        <h1>Login</h1>

        <input name="email" type="email" placeholder="Email" className="form-control" />
        <input name="password" type="password" placeholder="Password" className="form-control mt-2" />
        <button type="submit" className="btn btn-success w-100 mt-2"><i class="fas fa-sign-in-alt google-sign-in"></i> Log in</button>
        <p className="m-2">or</p>
        <button className="btn btn-primary w-100" onClick={() => handleGoogleLogin()}><i class="fab fa-google google-sign-in"></i> Sign in with Google</button>
        <p className="m-0 py-2">Nog geen account? Registreer dan <Link to="/register">hier</Link>!</p>
      </form>
    </div>
  )
}

export default Login
