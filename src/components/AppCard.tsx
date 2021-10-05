import React from "react";
import github_icon from "../assets/images/icons/GitHub.png";
import tg_icon from "../assets/images/icons/Telegram.png";
import twitter_icon from "../assets/images/icons/Twitter.png";

const AppCard: React.FC = ({ bg_url, logo, name, tag }: any) => {
  return (
    <>
      <div className="card">
        <div
          className="card-bg"
          style={{ backgroundImage: `url(${bg_url})` }}
        />
        <div className="bottom-bar flex justify-between items-center">
          <div className="flex justify-between w-full items-center">
            <div className="start grid grid-cols-3 justify-items-center gap-8 items-center">
              <img className="contact-icon" src={github_icon} alt="" />
              <img className="contact-icon" src={tg_icon} alt="" />
              <img className="contact-icon" src={twitter_icon} alt="" />
            </div>
            <div className="end grid grid-cols-2 justify-items-center items-center relative">
              <div className="tag">{tag}</div>
              <div className="name">{name}</div>
              <div
                className="app_logo"
                style={{ backgroundImage: `url(${logo})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
