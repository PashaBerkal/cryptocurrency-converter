import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { coinApi } from "../services/CoinService";

const rootReducer = combineReducers({
    [coinApi.reducerPath]: coinApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(coinApi.middleware)
        
    })
}
