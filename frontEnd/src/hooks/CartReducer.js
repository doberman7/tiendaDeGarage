//aqui solo crea el carrito sino existe, NO AQUI
const Storage = (cartItems) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};
//nop, acá soño suma lo que hay en el carrito, el cual está en storage
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        // Hint 3
        // .concat() doesn’t modify array but just returns a new array
        //
        // Hint 4
        // .slice() doesn’t modify array but just returns a new array
        //
        // Hint 5
        // spread operator […array] doesn’t modify array but just returns a new array
        //state => obj
        //cartItems => array
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };
    case 'INCREASE':
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case 'DECREASE':
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case 'CHECKOUT':
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case 'CLEAR':
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
