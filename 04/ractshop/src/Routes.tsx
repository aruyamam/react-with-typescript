import React, { Fragment } from 'react';
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch
} from 'react-router-dom';

import Header from './Header';
import AdminPage from './AdominPage';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';

const Routes: React.SFC = () => {
   const [loggedIn, setLoggedIn] = React.useState(false);

   return (
      <Router>
         <Fragment>
            <Header />
            <Switch>
               <Redirect exact={true} from="/" to="/products" />
               <Route exact={true} path="/products" component={ProductsPage} />
               <Route path="/products/:id" component={ProductPage} />
               <Route path="/admin">
                  {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
               </Route>
               <Route path="/login" component={LoginPage} />
               <Route component={NotFoundPage} />
            </Switch>
         </Fragment>
      </Router>
   );
};

export default Routes;
