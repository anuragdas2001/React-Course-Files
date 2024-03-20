import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  todos: [],
};

//AsyncThunk
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  // async (arg,thunkAPI) => {
  //   axios.get("http://localhost:4100/api/todos").then((res) => {
  //     console.log(res.data);
  //     // dispatch(actions.setInitialState(res.data));
  //     thunkAPI.dispatch(actions.setInitialState(res.data));
  //   });
  // });
   () => {
    return axios.get("http://localhost:4100/api/todos"); //making asynchronous call and returning a promise
  }
);

export const addTodoAsync = createAsyncThunk(
  "todo/addTodoAsync",
  async (payload) => {
    console.log(payload)
    const res = await fetch("http://localhost:4100/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({text: payload,completed: false})
    });
    return res.json();
  });

// Creating Reducer using Redux Toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // setInitialState: (state, action) => {
    //   state.todos = [...action.payload];
    //   // state.todos.push(...action.payload);
    // },
    // this is add action
    // add: (state, action) => {
    //   state.todos.push({
    //     text: action.payload, 
    //     completed: false,
    //   });
    // },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i == action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log("fetchTodos is fulfilled !");
        console.log(action.payload.data);
        state.todos = [...action.payload.data];
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log(action.payload);//The payload of the action (which is the response from the API)
        state.todos.push(action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;

export const actions = todoSlice.actions;

// selector
export const todoSelector = (state) => state.todoReducer.todos;

// Reducer using redux

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }
