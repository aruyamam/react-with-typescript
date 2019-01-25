import React, { Component } from 'react';
import { Prompt, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToBasket } from './BasketActions';
import { getProduct } from './ProductsActions';
import { IProduct } from './ProductsData';
import { IApplicationState } from './Store';
import Product from './Product';

interface IProps extends RouteComponentProps<{ id: string }> {
   addToBasket: typeof addToBasket;
   getProduct: typeof getProduct;
   product?: IProduct;
   added: boolean;
   loading: boolean;
}

class ProductPage extends Component<IProps> {
   public componentDidMount() {
      const { match, getProduct } = this.props;

      if (match.params.id) {
         const id: number = parseInt(match.params.id, 10);
         getProduct(id);
      }
   }

   public render() {
      const { added, product, loading } = this.props;

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
      const { product, addToBasket } = this.props;
      if (product) {
         addToBasket(product);
      }
   };

   private navAwayMessage = () =>
      'Are you sure you leave without buying this product?';
}

const mapStateToProps = (store: IApplicationState) => ({
   added: store.basket.products.some(p =>
      store.products.currentProduct
         ? p.id === store.products.currentProduct.id
         : false
   ),
   basketProducts: store.basket.products,
   loading: store.products.productsLoading,
   product: store.products.currentProduct || undefined
});

const mapDispatchToProps = (dispatch: any) => ({
   addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
   getProduct: (id: number) => dispatch(getProduct(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ProductPage);
