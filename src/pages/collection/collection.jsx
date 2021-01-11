import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item";

const CollectionPage = ({ match, collection }) => {
  return (
    <div className="category">
      {`${match.params}`}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collection),
});

export default connect(mapStateToProps)(CollectionPage);
