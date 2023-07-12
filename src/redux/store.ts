import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './feature/cart/CartSlice';
import productReducer from './feature/products/ProductSlice';
import { api } from './api/apiSlice';
const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
