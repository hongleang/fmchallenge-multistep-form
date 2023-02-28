import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    selectedPlan: '',
    planType: 'monthly'
}

export const selectionSlice = createSlice({
    name: 'selection',
    initialState: initialState,
    reducers: {
        updatePlans: (state, action) => {
            return state = { ...state, selectedPlan: action.payload }
        },
        updatePlanType: (state, action) => {
            return state = { ...state, planType: action.payload }
        }
    }
});

export const { updatePlans, updatePlanType } = selectionSlice.actions;

export default selectionSlice.reducer