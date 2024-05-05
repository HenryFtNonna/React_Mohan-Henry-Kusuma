import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const CreateProduct = ({ onSubmit, editId, onEdit, products }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState(null); 
    const [productFreshness, setProductFreshness] = useState('brand-new');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [categories, setCategories] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://660faf72356b87a55c520ca4.mockapi.io/halo');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const newProduct = {
                name: productName,
                category: productCategory,
                image: productImage,
                freshness: productFreshness,
                description: productDescription,
                price: productPrice
            };

            // Send data to Table.jsx
            onSubmit(newProduct);

            // Send data to API using Axios
            const formData = new FormData();
            formData.append('name', productName);
            formData.append('category', productCategory);
            formData.append('image', productImage);
            formData.append('freshness', productFreshness);
            formData.append('description', productDescription);
            formData.append('price', productPrice);

            await axios.post('https://660faf72356b87a55c520ca4.mockapi.io/DataTabel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setProductName('');
            setProductCategory('');
            setProductImage(null);
            setProductFreshness('brand-new');
            setProductDescription('');
            setProductPrice('');

            setShowSuccessMessage(true);

            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);

        } catch (error) {
            console.error('Error submitting product:', error);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProductImage(file);
    };

    return (
        <div className="container mt-5">
            <div>
                <h4>Detail Product</h4>
            </div>
            <div className="card">
                <form className="p-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="product-name" className="form-label">Product name</label>
                        <input type="text" className="form-control" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="product-category" className="form-label">Product Category</label>
                        <select className="form-select" id="product-category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="product-image" className="form-label">Image of Product</label>
                        <input type="file" className="form-control" id="product-image" onChange={handleImageChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Freshness</label><br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="product-freshness" id="brand-new" value="brand-new" checked={productFreshness === 'brand-new'} onChange={() => setProductFreshness('brand-new')} />
                            <label className="form-check-label" htmlFor="brand-new">Brand New</label>
                        </div>
                        <br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="product-freshness" id="second-hand" value="second-hand" checked={productFreshness === 'second-hand'} onChange={() => setProductFreshness('second-hand')} />
                            <label className="form-check-label" htmlFor="second-hand">Second Hand</label>
                        </div>
                        <br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="product-freshness" id="refurbished" value="refurbished" checked={productFreshness === 'refurbished'} onChange={() => setProductFreshness('refurbished')} />
                            <label className="form-check-label" htmlFor="refurbished">Refurbished</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="product-description" className="form-label">Additional Description</label>
                        <textarea className="form-control" id="product-description" rows="3" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="product-price" className="form-label">Product Price</label>
                        <input type="text" className="form-control" id="product-price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            {/* Success message */}
            {showSuccessMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    Data Berhasil Ditambahkan
                </div>
            )}
            <Outlet />
        </div>
    );
};

export default CreateProduct;
