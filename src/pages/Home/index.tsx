import React from "react";
import Header from "../../components/Header";
import AppCard from "../../components/AppCard";
import search_icon from "../../assets/images/icons/search.png";
import inchbg from "../../assets/images/1inch_bg.jpeg";
import aavebg from "../../assets/images/aave_bg.jpeg";
import inchlogo from "../../assets/images/LwPtET72_400x400.jpeg";
import aavelogo from "../../assets/images/J1YJtvdI_400x400.jpeg";

const Home: React.FC = () => {
  const cards: any[] = [
    { bg_url: inchbg, logo: inchlogo, name: "1inch", tag: "Dapps" },
    { bg_url: aavebg, logo: aavelogo, name: "aave", tag: "Dapps" },
    { bg_url: inchbg, logo: inchlogo, name: "1inch", tag: "Dapps" },
    { bg_url: aavebg, logo: aavelogo, name: "aave", tag: "Dapps" },
    { bg_url: inchbg, logo: inchlogo, name: "1inch", tag: "Dapps" },
    { bg_url: aavebg, logo: aavelogo, name: "aave", tag: "Dapps" },
    { bg_url: inchbg, logo: inchlogo, name: "1inch", tag: "Dapps" },
    { bg_url: aavebg, logo: aavelogo, name: "aave", tag: "Dapps" },
    { bg_url: inchbg, logo: inchlogo, name: "1inch", tag: "Dapps" },
    { bg_url: aavebg, logo: aavelogo, name: "aave", tag: "Dapps" },
  ];

  return (
    <>
      <Header />
      <div className="search-bar ">
        <div className="search-btn">
          <img src={search_icon} alt="" />
          <input type="text" placeholder="SEARCH..." />
        </div>
        <div className="filter-box flex flex-grow justify-items-auto justify-between gap-2">
          <div className="btn active">All</div>
          <div className="btn">Wallets</div>
          <div className="btn">Dapps</div>
          <div className="btn">Tools</div>
          <div className="btn">Bridges</div>
        </div>
      </div>
      <div
        className="card-box grid grid-cols-3 gap-8"
        style={{ paddingBottom: 100 }}
      >
        {cards.map((value) => (
          <AppCard {...value} />
        ))}
      </div>
    </>
  );
};

export default Home;
