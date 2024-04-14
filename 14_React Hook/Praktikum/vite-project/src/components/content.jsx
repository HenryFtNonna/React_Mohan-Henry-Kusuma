// content.jsx
import React, { useState } from 'react';

function Konten({ button, article }) {
  const [language, setLanguage] = useState('en');
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Random Number:', randomNumber);
  };

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName(value);

    if (value.length > 10) {
      setProductNameError('Product name should not exceed 10 characters');
    } else {
      setProductNameError('');
    }

    console.log('Product Name:', value);
  };

  return (
    <div className="container-fluid text-center p-4">
    <div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>{button}</button>
      <div>
        <h2>{article.title[language]}</h2>
        <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <img src="./assets/img/bootstrap-logo.png" alt="Logo" className="navbar-brand" />
                    </li>
                </ul>
        <p>{article.description[language]}</p>
        <div>
          <label>
            Product Name:
            <input 
              type="text"
              value={productName}
              onChange={handleProductNameChange}
            />
          </label>
          {productNameError && <p style={{ color: 'red' }}>{productNameError}</p>}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Konten;