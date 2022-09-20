import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postsReducer from './reducers/postsSlice';

const rootReducer = combineReducers({
    postsReducer
})

export const store = () => {
    return configureStore({
       reducer: rootReducer
    })
}