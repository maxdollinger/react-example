import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
     <div className="cart-dropdown">
          <div className="cart-item"></div>
          <CustomButton>Check out</CustomButton>
     </div>
)

export default CartDropdown;