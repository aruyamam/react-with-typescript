import React, { Component, Fragment } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { getProduct, IProduct } from './ProductsData';
import Product from './Product';

type Props = RouteComponentProps<{ id: string }>;

interface IState {
   product?: IProduct;
   added: boolean;
   loading: boolean;
}

class ProductPage extends Component<Props, IState> {
   public constructor(props: Props) {
      super(props);

      this.state = {
         added: false,
         loading: true
      };
   }

   public async componentDidMount() {
      const { match } = this.props;

      if (match.params.id) {
         const id: number = parseInt(match.params.id, 10);
         const product = await getProduct(id);

         if (product !== null) {
            this.setState({ product, loading: false });
         }
      }
   }

   public render() {
      const { added, product, loading } = this.state;

      return (
         <div className="page-container">
            <Prompt when={!added} message={this.navAwayMessage} />
            {product || loading ? (
               <Product
                  loading={loading}
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
