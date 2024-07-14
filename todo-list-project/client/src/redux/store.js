import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos.slice';
import userReducer from './user.slice';
const store=configureStore({
    reducer:{todo:todosReducer, user:userReducer}
})
export default store