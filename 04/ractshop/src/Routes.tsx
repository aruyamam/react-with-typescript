import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import AdominPage from './AdominPage';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';

const Routes: React.SFC = () => {
   return (
      <Router>
         <Fragment>
            <Header />
            <div>
               <Route exact={true} path="/products" component={ProductsPage} />
               <Route path="/products/:id" component={ProductPage} />
               <Route path="/admin" component={AdominPage} />
               <Route />
            </div>
         </Fragment>
      </Router>
   );
};

export default Routes;
