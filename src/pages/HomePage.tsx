import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProductType } from "../type/ProductType";
type HomePageProps = {
  products: ProductType[];
};
const HomePage = (props: HomePageProps) => {
  return (
    <div className="container">
      {props.products.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
            <Link to={`/products/${item._id}`} className="btn btn-primary">
              Chi tiết
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
