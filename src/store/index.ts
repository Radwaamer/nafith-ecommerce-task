import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import categoriesSlice from './categories/categoriesSlice';
import cartSlice from './cart/cartSlice';
import productDetailsSlice from './productDetails/productDetailsSlice';
import filterSlice from './filter/filterSlice';

export const store = configureStore({
    reducer: {productsSlice,categoriesSlice,cartSlice,productDetailsSlice,filterSlice},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch