import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebard from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CardQuestion1 from "../components/CardQuestion2";

import { getProducts } from "../redux/actions/productsAction";

const Question2 = () => {
  const dispatch = useDispatch();

  // const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);

//   console.log(products);

  useEffect(() => {
    dispatch(getProducts());
    // console.log('call useEffect')
  }, [dispatch]);

  return (
    <div className="auto-cols-auto">
      <div>
        <Sidebard />
      </div>
      <div>
        <Navbar />
        <CardQuestion1 products={products}/>
      </div>
    </div>
  );
};

export default Question2;
