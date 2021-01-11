import React from "react";
import { connect } from "react-redux";

import { selectCollectionsAsArray } from "../../redux/shop/shop.selectors";

import "./collection-overview.styles.scss";

import PreviewCollection from '../prieview-collection/prieview-collection';

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps}></PreviewCollection>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionsAsArray(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
