import "./NoteList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNotes } from "../../redux/actions/notesAction";
function NoteList() {
    // const notes=[];
    const notes = useSelector((state)=>state.notesReducer.notes);
    const dispatch = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>dispatch(deleteNotes(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
