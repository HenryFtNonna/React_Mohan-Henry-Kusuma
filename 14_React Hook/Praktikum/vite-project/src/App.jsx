// App.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/header.jsx';
import Konten from './components/content.jsx';
import CreateProduct from './components/form.jsx';
import Table from './components/Table.jsx';

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
    setEditId(null); // Reset editId setelah menambah produk baru
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
    setEditId(null); // Reset editId setelah produk diedit
  };

  return (
    <div>
      <Navbar />
      <Konten button="Generate Random Number" article={article} />
      <CreateProduct onSubmit={addProduct} editId={editId} onEdit={editProduct} products={products} />
      <Table products={products} onDelete={deleteProduct} onEdit={editProduct} setEditId={setEditId} />
    </div>
  )
}

export default App;