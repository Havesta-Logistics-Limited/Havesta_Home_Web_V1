import { configureStore } from "@reduxjs/toolkit";
import iconSlice from './features/iconSlice.js';

const store  = configureStore({
    reducer: {
      iconReducer: iconSlice
    }
})

export default store