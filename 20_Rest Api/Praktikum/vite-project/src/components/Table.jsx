import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios

const Table = ({ products, onDelete, onEdit, setEditId }) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State untuk menampilkan pesan sukses delete

    const handleDeleteClick = (productId) => {
        setSelectedProductId(productId);
        setShowDeleteConfirmation(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`https://660faf72356b87a55c520ca4.mockapi.io/DataTabel/${selectedProductId}`);
            
            onDelete(selectedProductId);
    
            setShowSuccessMessage(true);
    
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        } catch (error) {
            console.error('Error deleting product:', error);
        } finally {
            setShowDeleteConfirmation(false);
        }
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
                        <th>Product Image</th>
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
                            <td><img src={URL.createObjectURL(product.image)} alt="Product" width="50" height="50" /></td>
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

            {/* Success message */}
            {showSuccessMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    Data berhasil dihapus dari server.
                </div>
            )}
        </div>
    );
};

export default Table;
