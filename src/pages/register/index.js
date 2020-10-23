import React, { useCallback } from "react";
import { withRouter } from "react-router";
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
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Username
          <input name="username" type="text" placeholder="Username" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);