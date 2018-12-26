import * as React from 'react';
import { IProduct, products } from './ProductsData';

interface IState {
   products: IProduct[];
}

class PorductsPage extends React.Component<{}, IState> {
   public constructor(props: {}) {
      super(props);

      this.state = {
         products: []
      };
   }

   public componentDidMount() {
      this.setState({ products });
   }

   public render() {
      const { products } = this.state;

      return (
         <div className="page-container">
            <p>
               Welcome to React Shop where you can tell all your tools for
               ReactJS!
            </p>
            <ul className="product-list">
               {products.map(product => (
                  <li key={product.id} className="product-list-item">
                     {product.name}
                  </li>
               ))}
            </ul>
         </div>
      );
   }
}

export default PorductsPage;
