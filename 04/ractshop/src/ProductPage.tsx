import React, { Component, Fragment } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { IProduct, products } from './ProductsData';

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
               <Fragment>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p className="product-price">
                     {new Intl.NumberFormat('en-US', {
                        currency: 'USD',
                        style: 'currency'
                     }).format(product.price)}
                  </p>
                  {!added && (
                     <button onClick={this.handleAddClick}>
                        Add to basket
                     </button>
                  )}
               </Fragment>
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
