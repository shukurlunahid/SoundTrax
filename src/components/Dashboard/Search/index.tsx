import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchSearchTracks,
  removeSearchedTracks,
} from "../../../redux/actions/trackActions";

const SearchComponent: FC = () => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputValue !== "" && dispatch(fetchSearchTracks(inputValue));
  }, [inputValue]);
  const dispatch = useDispatch();

  const searchedTracks = useSelector(
    (store: any) => store.tracks.searchedTracks
  );

  const searchTrack = (name: string) => {
    setInputValue(name);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="search">
            <div className="input-group">
              <div className="form-outline">
                <input
                  value={inputValue}
                  onChange={(event) => searchTrack(event.target.value)}
                  type="search"
                  placeholder="Search..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {!inputValue ? (
          <div>
            <p>Type the name of the track...</p>
          </div>
        ) : inputValue && Object.keys(searchedTracks).length === 0 ? (
          <div>
            <p> No results found for "{inputValue}"</p>
          </div>
        ) : (
          searchedTracks.map((track: any) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="card track">
                  <div className="track__content">
                    <div className="track__content__name">{track.name}</div>
                    <div className="track__content__artist-name">
                      <Link to={`/artist/${track.artist}`}>{track.artist}</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
