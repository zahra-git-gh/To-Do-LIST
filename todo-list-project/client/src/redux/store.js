import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos.slice';
const store=configureStore({
    reducer:{todo:todosReducer}
})
export default store