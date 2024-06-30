import { createSlice } from "@reduxjs/toolkit";

const iconSlice = createSlice({
    name: 'iconState',
    initialState: {
        icon: 'home',
    },
    reducers: {
        setIcon: (state, action)=>{
            state.icon = action.payload
        }
    }
})

export const {setIcon} = iconSlice.actions

export default iconSlice.reducer;