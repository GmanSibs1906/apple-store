import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './componants/navbar/Navbar';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Orders from './pages/Orders';
import MobileMenu from './componants/navbar/MobileMenu';

function App() {


    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  
    const toggleOverlay = () => {
      setIsOverlayVisible(!isOverlayVisible);
    };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>

       {/* Add the Overlay component with conditional rendering */}
       {isOverlayVisible && <MobileMenu onClose={toggleOverlay} />}

{/* Button to toggle the overlay */}
<button onClick={toggleOverlay} className="fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 cursor-pointer">
  Show Overlay
</button>


    </Router>
  );
}

export default App;
