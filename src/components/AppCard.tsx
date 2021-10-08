import React from "react";
import { Link } from "react-router-dom";

const AppCard: React.FC = ({ bg_url, logo, name, tag }: any) => {
  return (
    <>
      <div className="card">
        <Link to={`/detail/${name}`}>
          <div
            className="card-bg"
            style={{ backgroundImage: `url(${bg_url})` }}
          />
        </Link>
        <div className="bottom-bar flex justify-between items-center">
          <div className="flex justify-between w-full items-center">
            <div className="start grid grid-cols-3 justify-items-center gap-8 items-center">
              <a href="/" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a href="/" target="_blank">
                <i className="fab fa-telegram-plane" />
              </a>
              <a href="/" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="end grid grid-cols-2 justify-items-center items-center relative">
              <div className="tag">{tag}</div>
              <div className="name">{name}</div>
              <Link to={`/detail/${name}`}>
                <div
                    className="app_logo"
                    style={{ backgroundImage: `url(${logo})` }}
                />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
