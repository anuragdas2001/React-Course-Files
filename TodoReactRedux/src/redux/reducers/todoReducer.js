import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
const initialState = {
  todos: [
    { text: "Meeting at 10", completed: true },
    { text: "Lunch at 2", completed: false },
  ],
};
export function todoReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      //returns single object
      return {
        ...state, //existing states
        todos: [
          ...state.todos, //existing todos
          {
            //creation of new todo
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
