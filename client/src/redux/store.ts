import { configureStore } from "@reduxjs/toolkit";
import leadSliceReducer from "./slices/LeadSlice";

const store = configureStore({
    reducer: {
        lead: leadSliceReducer
    },
    devTools: true
})

export default store;