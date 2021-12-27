import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from './pages/Success'
import { Routes, Route, BrowserRouter,Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/products/:category" element={<ProductList/>}/>
      </Routes>
      <Routes>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Routes>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
    
  );
  
};

export default App;