import React, { Component, Fragment } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductsData';
import Product from './Product';

type Props = RouteComponentProps<{ id: string }>;

interface IState {
   product?: IProduct;
   added: boolean;
}

class ProductPage extends Component<Props, IState> {
   public constructor(props: Props) {
      super(props);

      this.state = {
         added: false
      };
   }

   public componentDidMount() {
      const { match } = this.props;

      if (match.params.id) {
         const id: number = parseInt(match.params.id, 10);
         const product = products.filter(p => p.id === id)[0];

         this.setState({ product });
      }
   }

   public render() {
      const { added, product } = this.state;

      return (
         <div className="page-container">
            <Prompt when={!added} message={this.navAwayMessage} />
            {product ? (
               <Product
                  product={product}
                  inBasket={added}
                  onAddToBasket={this.handleAddClick}
               />
            ) : (
               <p>Product not found!</p>
            )}
         </div>
      );
   }

   private handleAddClick = () => {
      this.setState({ added: true });
   };

   private navAwayMessage = () =>
      'Are you sure you leave without buying this product?';
}

export default ProductPage;
