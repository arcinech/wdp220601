import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import CompareBar from './components/features/CompareBar/CompareBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <MainLayout>
    <CompareBar />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route exact path='/shop/:categoryId' element={<ProductList />} />
      <Route exact path='/product/:productId' element={<ProductPage />} />
    </Routes>
  </MainLayout>
);

export default App;
