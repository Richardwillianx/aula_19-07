import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;
const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase(state, action) {
            return state + action.payload;
        },
        decrease(state, action) {
            return state - action.payload;
        },
        reset() {
            return initialState;
        }
    }
});

export const { increase, decrease, reset } = slice.actions;
export default slice.reducer;