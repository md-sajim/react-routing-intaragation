import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";
const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h2 className="login-head">This is login</h2>
      <div>
        <button onClick={handleGoogleSignIn}>Google sign in</button>
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
