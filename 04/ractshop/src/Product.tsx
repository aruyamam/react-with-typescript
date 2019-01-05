import React, { Fragment } from 'react';
import { IProduct } from './ProductsData';
import Tabs from './Tabs';

interface IProps {
   product: IProduct;
   inBasket: boolean;
   onAddToBasket: () => void;
}

const Product: React.SFC<IProps> = ({ product, inBasket, onAddToBasket }) => {
   const handleAddClick = () => onAddToBasket();

   return (
      <Fragment>
         <h1>{product.name}</h1>
         <Tabs>
            <Tabs.Tab name="Description" initialActive={true}>
               <b>Description</b>
            </Tabs.Tab>
            <Tabs.Tab name="Reviews">Reviews</Tabs.Tab>
         </Tabs>
         <p>{product.description}</p>
         <ul className="product-reviews">
            {product.reviews.map(review => (
               <li key={review.reviewer} className="product-reviews-item">
                  <i>"{review.comment}"</i> - {review.reviewer}
               </li>
            ))}
         </ul>
         <p className="product-price">
            {new Intl.NumberFormat('en-US', {
               currency: 'USD',
               style: 'currency'
            }).format(product.price)}
         </p>
         {!inBasket && <button onClick={handleAddClick}>Add to basket</button>}
      </Fragment>
   );
};

export default Product;
