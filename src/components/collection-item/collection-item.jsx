import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, preview }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {preview ? (
          ""
        ) : (
          <div className="button-container">
            <CustomButton inverted="true" onClick={() => addItem(item)}>
              +
            </CustomButton>
          </div>
        )}
      </div>
      {preview ? (
        ""
      ) : (
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price} €</span>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
