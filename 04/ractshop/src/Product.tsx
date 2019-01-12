import React, { Fragment } from 'react';
import { IProduct } from './ProductsData';
import Tabs from './Tabs';
import withLoader from './withLoader';

interface IProps {
   product?: IProduct;
   inBasket: boolean;
   onAddToBasket: () => void;
}

const Product: React.SFC<IProps> = props => {
   const handleAddClick = () => props.onAddToBasket();

   if (!props.product) {
      return null;
   }

   return (
      <Fragment>
         <h1>{props.product.name}</h1>
         <Tabs>
            <Tabs.Tab
               name="Description"
               initialActive={true}
               heading={() => <b>Description</b>}
            >
               <p>{props.product.description}</p>
            </Tabs.Tab>
            <Tabs.Tab name="Reviews" heading={() => 'Reviews'}>
               <ul className="product-reviews">
                  {props.product.reviews.map(review => (
                     <li key={review.reviewer}>
                        <i>"{review.comment}"</i> - {review.reviewer}
                     </li>
                  ))}
               </ul>
            </Tabs.Tab>
         </Tabs>

         <p className="product-price">
            {new Intl.NumberFormat('en-US', {
               currency: 'USD',
               style: 'currency'
            }).format(props.product.price)}
         </p>
         {!props.inBasket && (
            <button onClick={handleAddClick}>Add to basket</button>
         )}
      </Fragment>
   );
};

export default withLoader(Product);
