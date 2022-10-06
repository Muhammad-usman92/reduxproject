import React, { useEffect } from "react";
import ProdcutComponent from "./productComponent";
import { useSelector } from "react-redux";
import axios from "axios";
const ProductListing = () => {
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Errorr is:", err);
      });
    console.log("This is the response",response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div className="ui grid component">
      <ProdcutComponent />
    </div>
  );
};

export default ProductListing;
