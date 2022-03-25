import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../../type/ProductType";

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number | string | undefined) => void;
};

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          {props.products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                <button onClick={() => props.onRemove(item._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager;
