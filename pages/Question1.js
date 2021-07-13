import React, { useEffect } from "react";
import Sidebard from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CardQuestion1 from "../components/CardQuestion1";

import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../redux/actions/productsAction";

const Question1 = () => {
  const dispatch = useDispatch();

  // const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);

  // console.log(products);

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
        <CardQuestion1 products={products} />
      </div>
    </div>
  );
};

export default Question1;
