// Table.jsx
import React from 'react';

const Table = ({ products, onDelete, onEdit, setEditId }) => {
    return (
        <div>
            <h2>Product List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Freshness</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.freshness}</td>
                            <td>{product.price}</td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
                                <button type="button" className="btn btn-success" onClick={() => {
                                  setEditId(product.id); // Set editId ke id produk yang akan diedit
                                  onEdit(product.id, { ...product }); // Kirim data produk yang akan diedit ke komponen App
                                }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;