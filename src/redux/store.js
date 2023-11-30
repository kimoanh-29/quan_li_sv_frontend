import { configureStore } from '@reduxjs/toolkit';
import subjectReducer from './features/subjectSlice';

export const store = configureStore({
    reducer: {
        subject: subjectReducer,
    }
})