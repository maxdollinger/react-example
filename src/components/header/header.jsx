import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import "./header.styles.scss";

const Header = ({ currentUser, cartHidden }) => {
  let history = useHistory();

  const signOut = () => {
    auth.signOut();
    history.push("/");
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <div className="logo">
          <Logo />
        </div>
        <div className="heading">
          <span className="line">Crown Clothing</span>
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOut}>Sign-Out</div>
        ) : (
          <Link className="option" to="/sign-in">
            Sign-in
          </Link>
        )}
        <CartIcon />
      </div>
      {
        cartHidden ? null : (
          <CartDropdown />
        )
      }
    </div>
  )
} ;

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  cartHidden: hidden
})

export default connect(mapStateToProps)(Header);
