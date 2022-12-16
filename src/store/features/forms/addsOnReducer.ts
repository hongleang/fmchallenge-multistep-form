import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    addOns: []
}

export const selectionSlice = createSlice({
    name: 'selection',
    initialState: initialState,
    reducers: {
        updateAddOns: (state, action) => {
            return state = { ...state, addOns: action.payload }
        }
    }
});

export const { updateAddOns } = selectionSlice.actions;

export default selectionSlice.reducer