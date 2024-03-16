import { ADD_NOTES, DELETE_NOTES } from "../actions/notesAction";

const initialState = {
  notes: [
    { text: "Learning Redux in React is fun", createdOn: new Date() },
    { text: "Learning React is fun", createdOn: new Date() },
  ],
};

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };
    case DELETE_NOTES:
      state.notes.splice(action.index, 1);
      return {
        ...state,
        notes: [...state.notes],
      };
    default:
      return state;
  }
}
