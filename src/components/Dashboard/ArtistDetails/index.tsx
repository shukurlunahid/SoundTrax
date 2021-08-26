import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchArtist,
  removeSelectedArtist,
} from "../../../redux/actions/artistActions";

import "./index.scss";

const ArtistDetailsComponent: FC = () => {
  let { artistName } = useParams<any>();
  const artist = useSelector((store: any) => store.artist);

  useEffect(() => {
    artistName !== "" && dispatch(fetchArtist(artistName));
    return () => {
      dispatch(removeSelectedArtist());
    };
  }, [artistName]);
  const dispatch = useDispatch();

  return (
    <div className="artist">
      <div className="container">
        {Object.keys(artist).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="artist__about">
            <div className="row">
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="artist__about__image">
                  {artist.image ? (
                    <img
                      width="100%"
                      src={artist?.image[3]["#text"]}
                      alt={artist?.name}
                    />
                  ) : (
                    <h1>Loading...</h1>
                  )}
                </div>
              </div>
              <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                <div className="artist__about__content">
                  <h1>{artist.name}</h1>
                  {artist?.tags?.tag.map((tag: any) => {
                    return <a>{tag.name}</a>;
                  })}
                  <p>{artist?.bio?.summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistDetailsComponent;
