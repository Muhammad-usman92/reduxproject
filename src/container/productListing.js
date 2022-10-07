// import React, { useEffect } from "react";
// import ProdcutComponent from "./productComponent";
// import { useSelector, useDispatch } from "react-redux";
// import { setProducts } from "../redux/action/productAction";
// import axios from "axios";
// const ProductListing = () => {
//   const products = useSelector((state) => state.allProducts.products);
//   console.log("products:", products);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios
//           .get("https://fakestoreapi.com/products")
//           .catch((err) => {
//             console.log("Errorr is:", err);
//           });
//         // console.log("This is the response", response.data);
//         dispatch(setProducts(response.data));
//       } catch (error) {
//         console.log("thsis is the catch error", error);
//       }
//     };

//     fetchProducts();
//   }, []);
  


//   return (
//     <div className="ui grid component">
//       {/* {products.map((item) => (
//         <h1>{item}</h1>
//       ))} */}
//     </div>
//   );
// };

// export default ProductListing;

import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/action/productAction";
import ProductComponent from "./productComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
 const fetchProducts = async () => {
   const response = await axios
     .get("https://fakestoreapi.com/products")
     .catch((err) => {
       console.log("Err: ", err);
     });

  //  console.log(response)
   dispatch(setProducts(response.data));
 };

 useEffect(() => {
  fetchProducts();
}, []);  

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

