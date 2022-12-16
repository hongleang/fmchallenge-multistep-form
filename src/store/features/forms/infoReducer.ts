import { createSlice } from '@reduxjs/toolkit'
import { UpdateState } from '../../../models/InfoForm/InfoState';

const initialState =
{
    name: '',
    email: '',
    phone: '',
    formErrors: {}
}

export const infoSlice = createSlice({
    name: 'info',
    initialState: initialState,
    reducers: {
        update: (state: UpdateState, action) => {
            return state = { ...state, ...action.payload }
        },
        reset: state => {
            return state = initialState
        }
    }
});

export const { update, reset } = infoSlice.actions;

export default infoSlice.reducer