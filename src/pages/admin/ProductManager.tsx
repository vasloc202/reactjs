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
      <table className=" container table border border-gray-500">
        <thead className="border border-gray-500">
          <tr>
            <th>ID</th>
            <th>Id Danh Mục</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Chi tiết</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.desc}</td>
              <td>
                <button className="btn btn-primary">
                  <Link className="text-blue text-decoration-none px-3 hover:text-sky-500" to={`/admin/products/${item._id}/edit`}>Edit</Link>
                </button>
                <button className="bg: bg-sky-500 text-white" onClick={() => props.onRemove(item._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManager;
