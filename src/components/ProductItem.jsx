import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border border-slate-300 rounded-xl w-80 shadow group hover:shadow-md transition-all relative">
      <Link to={`/product/${product.id}`}>
               <div className="price absolute right-3 top-2 bg-blue-200 px-5 py-1 rounded-lg">
                             ${product.price}
               </div>
        {console.log(product)}
        <div className="img bg-slate-50 overflow-hidden">
          <img src={product.images} width="250px" height="250px" className="mx-auto group-hover:scale-125  transition-all"/>
        </div>
        <div className="content m-5">
          <h3 className="font-bold text-lg">{product.title}</h3>
          <p className="my-2 px-5 py-2  bg-red-100 rounded-md text-center w-2/3">{product.category}</p>
          <p className="text-slate-600">{product.description}</p>
        </div>
      </Link>
      <div className="btn  w-11/12 mx-auto flex items-center justify-center my-5">
      <button
        onClick={() => dispatch(addToCart(product))}
        className="bg-blue-800 text-white px-8  py-2 mt-2 rounded-xl w-full flex items-center justify-center group-hover:bg-blue-600 transition-all">
        <FaCartShopping className="mr-2"/>
        Add to Cart
      </button>
      </div>
     
    </div>
  );
};

export default ProductItem;
