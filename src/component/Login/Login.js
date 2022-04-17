import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <h2 className="login-head">This is login</h2>
      <div>
        <button onClick={signInWithGoogle}>Google sign in</button>
      </div>
      <form>
        <br />
        <input type="email" placeholder="Your email" />
        <br />
        <input type="password" name="" id="" placeholder="Your password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
