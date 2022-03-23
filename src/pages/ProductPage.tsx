import React from "react";
import { ProductType } from "../type/ProductType";
type ProductPageProps = { products: ProductType[] };

const ProductPage = (props: ProductPageProps) => {
  return (
    <div>
      {props.products.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
