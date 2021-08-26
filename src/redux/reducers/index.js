import { combineReducers } from "redux";

import { artistReducer } from "./artistReducer";
import { trackReducer } from "./trackReducer";

const reducers = combineReducers({
  tracks: trackReducer,
  artist: artistReducer,
});

export default reducers;