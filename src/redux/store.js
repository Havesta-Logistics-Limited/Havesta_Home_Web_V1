import { configureStore } from "@reduxjs/toolkit";
import iconSlice from './features/iconSlice.js';
import modalSlice from './features/modalSlice.js'
const store  = configureStore({
    reducer: {
      iconReducer: iconSlice,
      modalReducer: modalSlice
    }
})

export default store