import { configureStore } from '@reduxjs/toolkit';
// import subjectReducer from './features/subjectSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
    reducer: {
        // subject: subjectReducer,
        user: userReducer,
    }
})