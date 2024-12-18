import { configureStore } from "@reduxjs/toolkit";
import { serviceReducer } from "./consReducer";

export const store = configureStore({
    reducer:{
        Cons:serviceReducer,
    }
})