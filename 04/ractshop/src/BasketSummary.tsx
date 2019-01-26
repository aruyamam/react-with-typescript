import React from 'react';

interface IProps {
   count: number;
}

const BasketSummary: React.SFC<IProps> = ({ count }) => {
   return <div className="basket-summary">{count}</div>;
};

export default BasketSummary;
