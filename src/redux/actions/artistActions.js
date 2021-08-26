import storeApi from "../../apis/storeApi";
import { ActionTypes } from "../constants/action-types";

export const fetchArtist = (artist) => async (dispatch) => {
  const response = await storeApi.get(
    `/?method=artist.getinfo&artist=${artist}&api_key=71182e4a401cd45b9dd11668ebd6e91a&format=json`
  );
  dispatch({
    type: ActionTypes.FETCH_ARTIST,
    payload: response.data.artist,
  });
};

export const removeSelectedArtist = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ARTIST,
  };
};
