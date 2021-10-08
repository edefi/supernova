import React from "react";
import Header from "../../components/Header";
import AppCard from "../../components/AppCard";
import search_icon from "../../assets/images/icons/search.png";
import inchbg from "../../assets/images/1inch_bg.jpeg";
import aavebg from "../../assets/images/aave_bg.jpeg";
import inchlogo from "../../assets/images/LwPtET72_400x400.jpeg";
import aavelogo from "../../assets/images/J1YJtvdI_400x400.jpeg";
import SearchBar from "../../components/SearchBar";

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
      <div className="layout-wrap">
        <SearchBar />
        <div
          className="card-box grid grid-cols-3 gap-8"
          style={{ paddingBottom: 100 }}
        >
          {cards.map((value) => (
            <AppCard {...value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
