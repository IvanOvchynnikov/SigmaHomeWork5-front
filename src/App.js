import Nav from "./components/nav/Nav";
import './styles/common.scss'
import './styles/reset.scss';
import {Router,Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import {useState} from "react";
import Cart from "./pages/Cart";
import OrderFinished from "./pages/OrderFinished";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import Admin from "./components/admin/Admin";


function App() {
    const [cartItems,setCartItems]=useState([]);

    return (
        <div className="App">
          <Nav cartItems={cartItems}/>
            <Routes>
                <Route path='/' element={<Home cartItems={cartItems} setCartItems={setCartItems}/>}/>
                <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
                <Route path='/orderFinished' element={<OrderFinished/>}/>
                <Route path='/admin' element={<Admin/>}/>}/>
                <Route path='/*' element={<PageNotFound/>}/>}/>
            </Routes>
            <Footer/>
        </div>
  );
}

export default App;
