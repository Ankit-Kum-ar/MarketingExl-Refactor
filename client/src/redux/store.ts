import { configureStore } from '@reduxjs/toolkit';
import leadReducer from './slices/LeadSlice';
import BlogReducer from './slices/BlogSlice';


export const store = configureStore({
  reducer: {
    lead: leadReducer,
    blogs: BlogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;