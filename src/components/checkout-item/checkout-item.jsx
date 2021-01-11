import React from "react";

import { connect } from "react-redux";
import {
  deleteItem,
  addItem,
  decreaseQuantity,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, deleteItem, increase, decrease }) => {
  const { name, price, quantity, imageUrl } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="arrow" onClick={() => decrease(item)}>
          &#10094;
        </button>
        {quantity}
        <button className="arrow" onClick={() => increase(item)}>
          &#10095;
        </button>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(item)}>
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
  increase: (item) => dispatch(addItem(item)),
  decrease: (item) => dispatch(decreaseQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
