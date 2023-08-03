import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // Si el producto ya existe, aumentamos la cantidad (quantity) en una copia del estado
        const updatedProducts = state.products.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return { products: updatedProducts };
      } else {
        // Si el producto no existe, lo agregamos al estado
        return {
          products: [...state.products, { ...action.payload}],
        };
      }
    }
    case "DELETE":{
        const findProduct= state.products.filter(product=> product.id===action.payload.id)
        if(findProduct[0].quantity===1){
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        )}}
        else{
            const updateState= state.products.map((p)=>
                p.id == findProduct[0].id ? {...p, quantity: p.quantity - 1 }: p)
            return {
                products: [...updateState]
            }
        }
    }
    default:
      return state;
  }
}

const store = configureStore({
  reducer: cartReducer,
});

export default store;
