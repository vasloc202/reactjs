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
      <Link to="/admin/products/add">Thêm sản phẩm</Link>
      <table className="table table-bordered">
        <tbody>
          {props.products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-primary">
                  <Link className="text-white text-decoration-none px-3" to={`/admin/products/${item._id}/edit`}>Edit</Link>
                </button>
                
                <button className="btn btn-danger" onClick={() => props.onRemove(item._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager;
