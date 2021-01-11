import React from "react";
import { connect } from 'react-redux';

import { selectShopData } from '../../redux/shop/shop.selectors';

import PreviewCollection from "../../components/prieview-collection/prieview-collection";

const ShopPage = ({ collections }) => {
  return(
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps}></PreviewCollection>
      ))}
    </div>
  )};

const mapStateToProps = state => ({
  collections: selectShopData(state)
})

export default connect(mapStateToProps)(ShopPage);
