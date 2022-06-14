import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';

const App = () => (
  <MainLayout>
    <Switch>
      <Route exact path={'/'} component={Homepage} />
      <Route exact path={'/shop/:categoryId'} component={ProductList} />
      <Route exact path={'/product/:productId'} component={ProductPage} />
    </Switch>
  </MainLayout>
);

export default App;
