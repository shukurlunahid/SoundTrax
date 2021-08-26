import { ActionTypes } from "../constants/action-types";

const initialState = {
  artist: null,
};

export const artistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_ARTIST:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_ARTIST:
      return {};
    default:
      return state;
  }
};
