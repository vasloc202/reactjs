import React from 'react'
import { Link } from 'react-router-dom';
import { Categories } from '../../type/Categories'

type CategoriesManagerProps = {
    categories: Categories[];
}

const CategoriesManager = (props: CategoriesManagerProps) => {
  return (
    <div>
        <table className="table table-bordered">
        <tbody>
          {props.categories.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
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