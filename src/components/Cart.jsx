import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { FaRemoveFormat } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
    <h1 className="my-5 mx-3 text-2xl font-bold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className=" mb-4">
            <div className="relative card flex items-center border border-gray-300 w-1/2 rounded-md">
            <div className="img">
              <img src={item.images} width="250px" height="250px"/>
            </div>
            <div className="content">
            <p className="my-2 font-semibold text-lg">{item.title}</p>
            <p className="my-2 font-bold text-xl">$ {item.price}</p>
            <div className="counter flex items-center my-5 text-lg">
            <button className="border border-gray-400 px-3 py-1 rounded-lg cursor-pointer"> - </button> <p className="mx-5">1</p> <button className="border border-gray-400 px-3 py-1 rounded-lg cursor-pointer"> + </button>
            </div>
           
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-2 py-1 rounded absolute top-2 right-2"
              >
                <AiFillDelete size={22}/>
              </button>
            </div>
              
            </div>
            </div>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;