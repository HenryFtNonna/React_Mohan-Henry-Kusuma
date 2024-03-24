import React, { useState } from 'react';

function CreateProduct({ button, article }) {
  const [language, setLanguage] = useState('id');
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
    <div>
      <button onClick={handleClick}>{button}</button>
      <div>
        <h2>{article.title[language]}</h2>
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
  );
}

export default CreateProduct;
