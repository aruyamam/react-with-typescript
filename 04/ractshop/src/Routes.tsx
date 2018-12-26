import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import AdominPage from './AdominPage';
import ProductsPage from './ProductsPage';

const Routes: React.SFC = () => {
   return (
      <Router>
         <Fragment>
            <Header />
            <div>
               <Route path="/products" component={ProductsPage} />
               <Route path="/admin" component={AdominPage} />
               <Route />
            </div>
         </Fragment>
      </Router>
   );
};

export default Routes;
