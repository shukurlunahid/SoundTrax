import storeApi from "../../apis/storeApi";
import { ActionTypes } from "../constants/action-types";

export const fetchTracks = () => async (dispatch) => {
  const response = await storeApi.get(
    "/?method=chart.gettoptracks&api_key=71182e4a401cd45b9dd11668ebd6e91a&format=json"
  );
  dispatch({
    type: ActionTypes.FETCH_TRACKS,
    payload: response.data.tracks.track,
  });
};

export const fetchSearchTracks = (value) => async (dispatch) => {
  const response = await storeApi.get(
    `/?method=track.search&track=${value}&api_key=71182e4a401cd45b9dd11668ebd6e91a&format=json`
  );
  if (response?.data.results) {
    dispatch({
      type: ActionTypes.FETCH_SEARCHED_TRACKS,
      payload: response.data.results.trackmatches.track,
    });
  }
};

export const removeSearchedTracks = () => {
  return {
    type: ActionTypes.REMOVE_SEARCHED_TRACKS,
  };
};
