import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <div>

    
    <header className=" p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-2xl m-3 text-blue-900 font-sans">ShoppyGlobe</Link>
      <Link to="/cart" className="relative flex items-center mx-8 my-3">
      <AiOutlineShoppingCart size={28} color="gray"/>
      <div className="count bg-orange-500 text-white w-4 h-4 flex items-center justify-center p-3 rounded-full absolute -top-3 left-4">
      {cartCount}
      </div>
      </Link>

    </header>
    <div className="line w-[100%] h-1 bg-gray-100 mx-auto"></div>
    </div>
  );
};

export default Header;