import React from 'react';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Konten from './components/landingpage.jsx';
import CreateProduct from './components/createproduct.jsx';
import Table from './components/Table.jsx';

const AppRouter = () => {
 return (
    <Routers>
      <Navbar />
      <Routes>
        <Route path="/" element={<Konten />} />
        <Route path="/create-product" element={<CreateProduct />}>
          <Route index element={<Table />} />
        </Route>
      </Routes>
    </Routers>
 );
};

export default AppRouter;
