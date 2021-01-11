export const addItemToCart = (cartItems, item) => {
     const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

     if (existingCartItem) {
          return cartItems.map(cartItem => cartItem.id === item.id ?
               { ...cartItem, quantity: ++cartItem.quantity } : cartItem)
     } else {
          return [...cartItems, { ...item, quantity: 1 }]
     }
}

export const decreaseQuantity = (cartItems, item) => {
     const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);

     if (existingCartItem && item.quantity > 1) {
          return cartItems.map(cartItem => cartItem.id === item.id ?
               { ...cartItem, quantity: --cartItem.quantity } : cartItem)
     } else {
          return cartItems;
     }
}