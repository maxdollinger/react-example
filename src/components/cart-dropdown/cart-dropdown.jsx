import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartToal,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, total, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {cartItems.length ? (
        <div>
          <span className="sum">Total = {total}€</span>
          <Link to="/checkout">
            <CustomButton onClick={() => dispatch(toggleCartHidden())}>
              Check out
            </CustomButton>
          </Link>
        </div>
      ) : (
        <span className="empty-msg">Cart is empty</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartToal(state),
});

export default connect(mapStateToProps)(CartDropdown);
