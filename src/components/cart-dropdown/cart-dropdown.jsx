import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, total}) => {
     
     return(
     <div className="cart-dropdown">
          <div className="cart-items">
          {
               cartItems.map( item => 
                    <CartItem key={item.id} item={item} />
               )
          }
          </div>
          <span className="sum">Total = {total}€</span>
          <CustomButton>Check out</CustomButton>
     </div>
)}

const mapStateToProps = ({cart: {cartItems, total}}) => ({
     cartItems,
     total
})

export default connect(mapStateToProps)(CartDropdown);