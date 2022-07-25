import React from 'react'

type Props = {}

const CartPage = (props: Props) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart") || "");
    }
    return (
        <div>

            <div>
                <div className="container">
                    <table className="h-96 mx-auto">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item: any, index: any) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap"><input type="number" value="1" /></td>
                                    <td className="px-6 py-4 whitespace-nowrap"><img src="https://picsum.photos/200/200" width="100px" /></td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button data-id="${item.id}" className="btn btn-increase h-12 w-12">+</button>
                                        <button data-id="${item.id}" className="btn btn-decrease h-12 w-12">-</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CartPage