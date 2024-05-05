// createproduct.jsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const CreateProduct = ({ onSubmit, editId, onEdit, products }) => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productImage, setProductImage] = useState(null); 
    const [productFreshness, setProductFreshness] = useState('brand-new');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name: productName,
            category: productCategory,
            image: productImage,
            freshness: productFreshness,
            description: productDescription,
            price: productPrice
        };

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('category', productCategory);
        formData.append('image', productImage);
        formData.append('freshness', productFreshness);
        formData.append('description', productDescription);
        formData.append('price', productPrice);

        if (editId) {
            onEdit(editId, newProduct);
        } else {
            onSubmit(newProduct);
        }

        setProductName('');
        setProductCategory('');
        setProductImage(null); 
        setProductFreshness('brand-new');
        setProductDescription('');
        setProductPrice('');
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProductImage(file);
    };

    useEffect(() => {
        if (editId) {
            const editedProduct = products.find(product => product.id === editId);
            setProductName(editedProduct.name);
            setProductCategory(editedProduct.category);
            setProductImage(editedProduct.image);
            setProductFreshness(editedProduct.freshness);
            setProductDescription(editedProduct.description);
            setProductPrice(editedProduct.price);
        }
    }, [editId, products]);

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
                        <input type="text" className="form-control" id="product-category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
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
            <Outlet />
        </div>
    );
};

export default CreateProduct;
