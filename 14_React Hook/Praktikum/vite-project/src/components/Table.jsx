// Table.jsx
import React, { useState } from 'react';

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
                                <button onClick={() => handleDeleteClick(product.id)}>Delete</button>
                                <button onClick={() => onEdit(product.id, { ...product })}>Edit</button>
                                {/* Gunakan satu tombol delete dengan konfirmasi */}
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Alert/Modal/Notification untuk konfirmasi delete */}
            {showDeleteConfirmation && (
                <div>
                    <p>Apakah Anda yakin ingin menghapus produk ini?</p>
                    <button onClick={confirmDelete}>Ya</button>
                    <button onClick={cancelDelete}>Tidak</button>
                </div>
            )}
        </div>
    );
};

export default Table;