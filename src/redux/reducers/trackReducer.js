import { ActionTypes } from "../constants/action-types";

const initialState = {
  allTracks: [],
  searchedTracks: [],
};

export const trackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TRACKS:
      return { ...state, allTracks: payload };
    case ActionTypes.FETCH_SEARCHED_TRACKS:
      return { ...state, searchedTracks: payload };
    case ActionTypes.REMOVE_SEARCHED_TRACKS:
      return {};
    default:
      return state;
  }
};
