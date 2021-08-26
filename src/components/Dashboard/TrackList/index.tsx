import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTracks } from "../../../redux/actions/trackActions";

import "./index.scss";

const TrackListComponent: React.FC = () => {
  useEffect(() => {
    dispatch(fetchTracks());
  }, []);
  const dispatch = useDispatch();

  const allTracks = useSelector((store: any) => store.tracks.allTracks);

  return (
    <div className="tracks">
      <div className="container">
        {Object.keys(allTracks).length === 0 ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="row">
            {allTracks.map((track: any) => {
              return (
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="card track">
                    <div className="track__image">
                      <img
                        width="100%"
                        src={track?.image[3]["#text"]}
                        alt={track.name}
                      />
                    </div>
                    <div className="track__content">
                      <div className="track__content__name">{track.name}</div>
                      <div className="track__content__artist-name">
                        <Link to={`/artist/${track.artist.name}`}>
                          {track.artist.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackListComponent;
