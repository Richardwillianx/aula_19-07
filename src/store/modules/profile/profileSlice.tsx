import { createSlice } from '@reduxjs/toolkit';

type Profile = {
    nome: string;
    idade: number;
}

const initialState = {} as Profile;
const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        save(state, action) {
            return action.payload;
        }
    }
});

export const { save } = slice.actions;
export default slice.reducer;