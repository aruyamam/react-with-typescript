import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdominPage from './AdominPage';
import ProductsPage from './ProductsPage';

const Routes: React.SFC = () => {
   return (
      <Router>
         <div>
            <Route path="/products" component={ProductsPage} />
            <Route path="/admin" component={AdominPage} />
            <Route />
         </div>
      </Router>
   );
};

export default Routes;
