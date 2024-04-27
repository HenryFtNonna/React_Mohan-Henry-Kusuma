import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Table = ({ products, onDelete, onEdit, setEditId }) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleDeleteClick = (productId) => {
        setSelectedProductId(productId);
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        onDelete(selectedProductId);
        setShowDeleteConfirmation(false);
    };

    const cancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    const handleEditClick = (productId) => {
        setEditId(productId); 
    };

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
                        <tr key={index}>
                            <td><Link to={`/account/${product.id}`}>{index + 1}</Link></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.freshness}</td>
                            <td>{product.price}</td>
                            <td>
                                <button type="delete" className="btn btn-danger" onClick={() => handleDeleteClick(product.id)}>Delete</button>
                                <button type="edit" className="btn btn-success" onClick={() => handleEditClick(product.id)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>

            {showDeleteConfirmation && (
                <div>
                    <p>Apakah Anda yakin ingin menghapus produk ini?</p>
                    <button type="button" className="btn btn-danger" onClick={confirmDelete}>Ya</button>
                    <button type="button" className="btn btn-light" onClick={cancelDelete}>Tidak</button>
                </div>
            )}
        </div>
    );
};

export default Table;
