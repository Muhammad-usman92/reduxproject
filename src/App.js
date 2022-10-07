import React from "react";
import Header from "./container/header";
import ProductComponent from "./container/productComponent";
import ProductListing from "./container/productListing";
import {Routes,Route} from "react-router-dom"
import ProductDetails from "./container/productDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" component={<ProductDetails/>} />
      </Routes>
    </>
  );
};

export default App;
