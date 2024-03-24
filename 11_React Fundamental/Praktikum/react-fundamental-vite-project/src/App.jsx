// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { useState } from 'react';
import './components/styles.css';

function App() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const addProduct = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const newProduct = {
                name: productName,
                price: productPrice
            };

            setProducts([...products, newProduct]);
            setProductName('');
            setProductPrice('');
            setError(''); 
            document.getElementById('jsdom').style.color = 'red'; 
        }
    };

    const validateForm = () => {
        if (productName.length < 6 || productName.length > 25) {
            setError('Product name must be between 6 and 25 characters.');
            return false;
        }

        if (isNaN(productPrice) || productPrice === '') {
            setError('Product price must be a number.');
            return false;
        }

        return true;
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Header</h1>
            </header>

            <main className="main-content">
                <h1>Product Management</h1>
                <h2 id="jsdom" style={{ color: error ? 'red' : 'black' }}>JavaScript DOM</h2>
                <form onSubmit={addProduct}>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        minLength="6"
                        maxLength="25"
                        id="productName"
                        name="productName"
                        value={productName}
                        onChange={handleProductNameChange}
                        required
                    /><br />
                    <label htmlFor="productPrice">Product Price:</label>
                    <input
                        type="text"
                        id="productPrice"
                        name="productPrice"
                        value={productPrice}
                        onChange={handleProductPriceChange}
                        required
                    /><br /><br /><br />
                    <button type="submit">Add Product</button>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div id="productTableContainer">
                    <table id="productTable" style={{ display: products.length ? 'table' : 'none' }}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <footer className="footer">
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

export default App;
