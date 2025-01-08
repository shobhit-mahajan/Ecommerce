import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./components/Home";

const ProductList = React.lazy(() => import("./components/ProductList"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const Cart = React.lazy(() => import("./components/Cart"));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;