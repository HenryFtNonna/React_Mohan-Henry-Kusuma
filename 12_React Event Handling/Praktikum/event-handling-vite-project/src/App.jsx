// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'



import React from 'react';
import CreateProduct from './components/CreateProduct.jsx';

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

function App() {
  return (
    <div>
      <h1>My Product Creation App</h1>
      <CreateProduct button="Generate Random Number" article={article} />
    </div>
  );
}

export default App;
