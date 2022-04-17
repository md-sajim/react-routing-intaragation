import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Header from "./component/Header/Header";
import Products from "./component/Products/Products";
import Orders from "./component/Orders/Orders";
import Reviews from "./component/Reviews/Reviews";
import Register from "./component/Register/Register";
import RequireAuth from "./component/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>;
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
