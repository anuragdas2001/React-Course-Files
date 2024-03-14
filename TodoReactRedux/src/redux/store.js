import redux from "redux";
import { createStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { addTodo } from "./actions/todoActions";
export const store = createStore(todoReducer);

store.dispatch(addTodo("hit the gym at 6"));
store.dispatch(addTodo("Office at 9"));

console.log(store.getState());