import React, { Fragment } from 'react';
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   RouteComponentProps,
   Switch
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './Header';
import AdminPage from './AdominPage';
import ProductsPage from './ProductsPage';
import ProductPage from './ProductPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';

const RoutesWrap: React.SFC = () => (
   <Router>
      <Route component={Routes} />
   </Router>
);

const Routes: React.SFC<RouteComponentProps> = ({ location }) => {
   const [loggedIn, setLoggedIn] = React.useState(false);

   return (
      <div>
         <Header />
         <TransitionGroup>
            <CSSTransition
               key={location.key}
               timeout={500}
               classNames="animate"
            >
               <Switch>
                  <Redirect exact={true} from="/" to="/products" />
                  <Route
                     exact={true}
                     path="/products"
                     component={ProductsPage}
                  />
                  <Route path="/products/:id" component={ProductPage} />
                  <Route path="/admin">
                     {loggedIn ? <AdminPage /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/login" component={LoginPage} />
                  <Route component={NotFoundPage} />
               </Switch>
            </CSSTransition>
         </TransitionGroup>
      </div>
   );
};

export default RoutesWrap;
