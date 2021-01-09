import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
     hidden: true,
     cartItems: [],
     total: 0,
     itemsCount: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
          case CartActionTypes.TOGGLE_CART_HIDDEN:
               return {
                    ...state,
                    hidden: !state.hidden
               }
          case CartActionTypes.ADD_ITEM:
               const cartItems = addItemToCart(state.cartItems,action.payload);

               return {
                    ...state,
                    cartItems,
                    total: (state.total+action.payload.price),
                    itemsCount: (++state.itemsCount)
               }
          default:
               return state;
     }
}

export default cartReducer;