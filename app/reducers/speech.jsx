'use strict';

//ACTION TYPE
export const SET_INTERIM_TRANSCRIPT = 'SET_INTERIM_TRANSCRIPT';
export const ADD_FINAL_TRANSCRIPT = 'ADD_FINAL_TRANSCRIPT';

//ACTION CREATOR
export const setInterimTranscript = (interimTranscript) => {
  return { type: SET_INTERIM_TRANSCRIPT, interimTranscript }
}
export const addFinalTranscript = (finalTranscript) => {
  return { type: ADD_FINAL_TRANSCRIPT, finalTranscript }
}

//REDUCER
const initialState = { interimTranscript: '', finalTranscripts: [] };

export default function userReducer(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case SET_INTERIM_TRANSCRIPT:
      newState.interimTranscript = action.interimTranscript;
      break;
    case ADD_FINAL_TRANSCRIPT:
      newState.finalTranscripts = state.finalTranscripts.concat([action.finalTranscript]);
      break;
    default:
      return state;
  }
  return newState;
}
