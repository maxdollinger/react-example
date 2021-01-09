import React, { useState } from "react";
import PreviewCollection from "../../components/prieview-collection/prieview-collection";
import shopData from "../../shop.data";

const ShopPage = (props) => {
  const [collections] = useState(shopData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps}></PreviewCollection>
      ))}
    </div>
  );
};

export default ShopPage;
