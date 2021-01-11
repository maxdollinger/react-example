import CartActionTypes from './cart.types';
import {
     addItemToCart,
     decreaseQuantity,
} from './cart.utils'

const INITIAL_STATE = {
     hidden: true,
     cartItems: [],
     total: 0,
     itemsCount: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case CartActionTypes.TOGGLE_CART_HIDDEN:
               return {
                    ...state,
                    hidden: !state.hidden
               }
          case CartActionTypes.ADD_ITEM:
               return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload),
                    total: (state.total + action.payload.price),
                    itemsCount: (++state.itemsCount)
               }
          case CartActionTypes.DELETE_ITEM:
               return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
                    total: state.total - (action.payload.price * action.payload.quantity),
                    itemsCount: state.itemsCount - action.payload.quantity,
               }
          case CartActionTypes.DECRESE_QUANTITY:
               if(action.payload.quantity > 1) {
                    state.total =  state.total - action.payload.price;
                    state.itemsCount = --state.itemsCount;
                    state.cartItems = decreaseQuantity(state.cartItems, action.payload);
               }

               return {...state}

          default:
               return state;
     }
}

export default cartReducer;