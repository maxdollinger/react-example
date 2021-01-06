import React from "react";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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
        <div className="option" onClick={ () => auth.signOut()}>Sign-Out</div>
      ) : (
        <Link className="option" to="/sign-in">
          Sign-in
        </Link>
      )}
    </div>
  </div>
);

export default Header;
