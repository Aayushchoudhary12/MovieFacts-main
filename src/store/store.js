import { configureStore } from "@reduxjs/toolkit"; 
import homeSlice from "../utils/homeSlice";

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
}) 