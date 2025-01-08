import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

import { FaCartShopping } from "react-icons/fa6";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => setError(err));
  }, [id]);

  return (
    <div className="p-4">
      {error ? (
        <p className="text-red-500">Error fetching product details.</p>
      ) : product ? (
        <div>

        
        <div className="content flex justify-evenly items-center">
        <div className="img flex-1">
        <img src={product.images} alt="" width="550px" height="550px"/>
        </div>
        <div className="inner-content mt-5 flex-1">
          <h1 className="text-3xl font-bold my-8">{product.title}</h1>
          <p className="my-5 text-blue-800 text-2xl font-bold">${product.price}</p>
          <p className="font-bold text-xl my-2">Description </p>
          <p className="my-2 w-1/2 text-gray-500">{product.description}</p>
           <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-blue-800 text-white px-8  py-2  rounded-xl w-1/2 flex items-center justify-center group-hover:bg-blue-600 transition-all my-8">
                  <FaCartShopping className="mr-2"/>
                  Add to Cart
                </button>
        </div>
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;