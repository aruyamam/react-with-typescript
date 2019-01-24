import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { IProduct } from './ProductsData';
import 'url-search-params-polyfill';
import { IApplicationState } from './Store';
import { getProducts } from './ProductsActions';
import ProductsList from './ProductsList';

interface IProps extends RouteComponentProps {
   getProducts: typeof getProducts;
   loading: boolean;
   products: IProduct[];
}

class PorductsPage extends React.Component<IProps> {
   public componentDidMount() {
      this.props.getProducts();
   }

   public render() {
      const { location, products, loading } = this.props;
      const searchParams = new URLSearchParams(location.search);
      const search = searchParams.get('search') || '';

      return (
         <div className="page-container">
            <p>
               Welcome to React Shop where you can tell all your tools for
               ReactJS!
            </p>
            <ProductsList
               search={search}
               products={products}
               loading={loading}
            />
         </div>
      );
   }
}

const mapStateToProps = (store: IApplicationState) => ({
   loading: store.products.productsLoading,
   products: store.products.products
});

const mapDispatchToProps = (dispatch: any) => ({
   getProducts: () => dispatch(getProducts())
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(PorductsPage);
