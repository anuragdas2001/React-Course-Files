
// const redux = require("redux");

import * as redux from "redux";
import {todoReducer} from "./reducers/todoReducer";
import { notesReducer } from "./reducers/notesReducer";
import { combineReducers } from "redux";

const result = combineReducers({
    todoReducer,
    notesReducer
})
export const store = redux.createStore(result);

