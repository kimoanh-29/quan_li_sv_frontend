import { createSlice } from '@reduxjs/toolkit';

const initialState = { value : {} };

export const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        setSubject: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setSubject } = subjectSlice.actions;

export default subjectSlice.reducer