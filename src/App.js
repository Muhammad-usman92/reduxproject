import React from "react";
import Header from "./container/header";
import ProductComponent from "./container/productComponent";
import ProductListing from "./container/productListing";
import {Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </>
  );
};

export default App;
