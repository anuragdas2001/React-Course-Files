//Action constants.

const { type } = require("@testing-library/user-event/dist/type");

export const ADD_TODO = "ADD TODO";
export const TOGGLE_TODO = "Toggle Todo";

//Action Creators

export const addTodo = (text) => ({ text, type: ADD_TODO });
export const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });
