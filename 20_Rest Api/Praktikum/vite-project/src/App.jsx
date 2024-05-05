import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Konten from './components/landingpage.jsx';
import CreateProduct from './components/createproduct.jsx';
import Table from './components/Table.jsx';
import AccountDetail from './components/AccountDetail.jsx'; 
import Authentication from './components/Authentication.jsx';

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account"
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  }
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: uuidv4() }]);
    setEditId(null);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const editProduct = (productId, editedProduct) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return editedProduct;
      }
      return product;
    });
    setProducts(updatedProducts);
    setEditId(null);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Konten button="Generate Random Number" article={article} />} />
          <Route path="/create-product" element={<CreateProduct onSubmit={addProduct} editId={editId} onEdit={editProduct} products={products} />}>
            <Route index element={<Table products={products} onDelete={deleteProduct} onEdit={editProduct} setEditId={setEditId} />} />
          </Route>
          <Route path="/account/:id" element={<AccountDetail />} /> 
          <Route path="/login" element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;