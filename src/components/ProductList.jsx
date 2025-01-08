import React, { useState } from "react";
import useFetchProducts from "../hooks/UseFetchProduct";
import ProductItem from "./ProductItem";
import { FaSearch } from "react-icons/fa";
import { Home } from "./Home";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const { products, error } = useFetchProducts();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Home/>
    <div className="p-4">
    <div className="search relative flex items-center justify-center">
    <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-600 rounded w-3/6 m-8 "
    
/>
    </div>
     
      {error ? (
        <p className="text-red-500">Error fetching products.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto my-10">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default ProductList;