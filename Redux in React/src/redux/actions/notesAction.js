//action constants
export const ADD_NOTES = "ADD NOTES";
export const DELETE_NOTES = "DELETE NOTES";
//action creators
export const addNotes = (text) => ({ text, type: ADD_NOTES });
export const deleteNotes = (index) => ({ index, type: DELETE_NOTES });
