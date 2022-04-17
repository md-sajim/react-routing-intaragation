import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>This is home</h2>
      <h2>Hi i am :{user ? user.displayName : "No body hare"}</h2>
    </div>
  );
};

export default Home;
