import React from "react";
import Header from "../../components/Header";
import AppCard from "../../components/AppCard";
import inchbg from "../../assets/images/1inch_bg.jpeg";
import aavebg from "../../assets/images/aave_bg.jpeg";
import inchlogo from "../../assets/images/LwPtET72_400x400.jpeg";
import aavelogo from "../../assets/images/J1YJtvdI_400x400.jpeg";
import dodo_bg from "../../assets/images/dood_bg.jpeg";
import dodo_logo from "../../assets/images/dodo_logo.png";
import piggy_bg from "../../assets/images/piggy_bg.jpeg";
import piggy_logo from "../../assets/images/piggy_logo.jpeg";
import uni_bg from "../../assets/images/uni_bg.jpeg";
import uni_logo from "../../assets/images/uni_logo.jpeg";
import SearchBar from "../../components/SearchBar";

const Home: React.FC = () => {
  const cards: any[] = [
    { bg_url: uni_bg, logo: uni_logo, name: "UNISWAP", tag: "Dapps" },
    { bg_url: inchbg, logo: inchlogo, name: "1INCH", tag: "Dapps" },
    { bg_url: aavebg, logo: aavelogo, name: "AAVE", tag: "Dapps" },
    { bg_url: dodo_bg, logo: dodo_logo, name: "DODO", tag: "Dapps" },
    { bg_url: piggy_bg, logo: piggy_logo, name: "WEPIGGY", tag: "Dapps" },
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
