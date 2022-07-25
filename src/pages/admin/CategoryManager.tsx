import React from 'react'
import { Link } from 'react-router-dom';
import { Categories } from '../../type/Categories'

type CategoriesManagerProps = {
  categories: Categories[];
}

const CategoriesManager = (props: CategoriesManagerProps) => {
  return (
    <div>
      <a href="/admin/categories/add">Thêm danh mục</a>
      <table className="container border border-gray-500">
        <thead className="border border-gray-500">
          <tr>
            <th>STT</th>
            <th>Id Danh Mục</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.categories.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>
                <Link to={`/admin/product/${item._id}/edit`}>Edit</Link>
                {/* <button onClick={() => props.onRemove(item._id)}>Remove</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CategoriesManager