import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
     [selectCart], cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
     [selectCart], cart => cart.itemsCount
)

export const selectCartToal = createSelector(
     [selectCart], cart => cart.total
)