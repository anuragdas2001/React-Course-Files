import "./NoteList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { deleteNotes } from "../../redux/actions/notesAction";
import { actions, notesSelector } from "../../redux/reducers/notesReducer";
function NoteList() {
    // const notes=[];
    // const notes = useSelector((state)=>state.noteReducer.notes);
    const notes = useSelector(notesSelector)
    const dispatch = useDispatch(notesSelector);
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>dispatch(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
