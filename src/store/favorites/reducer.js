export const initialState = {
  favorites: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      let newState;
      const newProduct = action.payload;
      const found = state.favorites.find(
        (product) => product.id === newProduct.id
      );
      if (!found) {
        //....
        newState = { favorites: [...state.favorites, newProduct] };
        return newState;
      } else {
        return state;
      }
    }
    case "REMOVE_FROM_FAVORITES": {
      let newState;
      const filteredProducts = state.favorites.filter((product) => {
        return product.id !== action.payload;
      });
      newState = { favorites: filteredProducts };
      //....
      return newState;
    }
    default: {
      return state;
    }
  }
}
