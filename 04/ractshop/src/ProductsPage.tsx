import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductsData';
import 'url-search-params-polyfill';

interface IState {
   products: IProduct[];
   search: string;
}

class PorductsPage extends React.Component<RouteComponentProps, IState> {
   public static getDerivedStateFromProps(
      props: RouteComponentProps,
      state: IState
   ) {
      const searchParams = new URLSearchParams(props.location.search);
      const search = searchParams.get('search') || '';

      return {
         products: state.products,
         search
      };
   }

   public constructor(props: RouteComponentProps) {
      super(props);

      this.state = {
         products: [],
         search: ''
      };
   }

   public componentDidMount() {
      this.setState({ products });
   }

   public render() {
      const { products, search } = this.state;

      return (
         <div className="page-container">
            <p>
               Welcome to React Shop where you can tell all your tools for
               ReactJS!
            </p>
            <ul className="product-list">
               {products.map(product => {
                  if (
                     !search ||
                     (search &&
                        product.name
                           .toLowerCase()
                           .indexOf(search.toLowerCase()) > -1)
                  ) {
                     return (
                        <li key={product.id} className="product-list-item">
                           <Link to={`/products/${product.id}`}>
                              {product.name}
                           </Link>
                        </li>
                     );
                  } else {
                     return null;
                  }
               })}
            </ul>
         </div>
      );
   }
}

export default PorductsPage;
