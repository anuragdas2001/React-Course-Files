import { toggleTodo } from "../../redux/actions/todoActions";
import "./ToDoList.css";
import { useDispatch, useSelector } from "react-redux";
function ToDoList({ onToggle }) {
  const todos = useSelector((state) => state.todos);
  //const todos = store.getState().todos;
  const dispatch = useDispatch();


  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                // onToggle(index);
                dispatch(toggleTodo(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
