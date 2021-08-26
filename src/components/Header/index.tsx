import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const HeaderComponent: FC = () => {
  return (
    <div className="container">
      <div className="menu">
        <div className="menu__title">
          <h1>
            <Link to="/">SoundTrax</Link>
          </h1>
        </div>
        <div className="menu__btns">
          <div className="menu__btns__search-btn">
            <Link to='/search'>
              <i className="fas fa-search"></i>
              Search
            </Link>
          </div>
          <div className="menu__btns__auth">
            <button className="btn btn-secondary">Signin</button>
            <button type="button" className="btn btn-warning">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
