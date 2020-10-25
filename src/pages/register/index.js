import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, username, password } = event.target.elements;
    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(() => {
          app.auth().currentUser.updateProfile({
            displayName: username
          })
        })
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="container text-center mt-5">
      <form onSubmit={handleSignUp} className="form-signin border rounded">
        <img width="72" src={require("../../assets/images/logo_notext.png")} alt="Logo" className="img-fluid" />
        <h1>Sign up</h1>
        <input name="email" type="email" placeholder="Email" className="form-control" />
        <input name="username" type="text" placeholder="Username" className="form-control mt-2" />
        <input name="password" type="password" placeholder="Password" className="form-control mt-2" />
        <button className="btn btn-success w-100 mt-2" type="submit">Sign Up</button>
        <p className="m-0 py-2">Al een account? Log dan <Link to="/login">hier</Link> in!</p>
      </form>
    </div>
  );
};

export default withRouter(SignUp);