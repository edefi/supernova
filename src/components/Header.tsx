import React, { useState, useEffect, Fragment, useCallback } from "react";
import NavLinks from "./NavLinks";

import LogoImage from "../assets/images/logo.png";
import { Menu } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import zhicon from "../assets/images/zh.svg"
import enicon from "../assets/images/en.svg"

const Header = ({ open, btnClass, toggleMenu }: any) => {
  const [sticky, setSticky] = useState(false);
  const { t, i18n } = useTranslation();
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const changeLang = useCallback(
    async (lang) => {
      await i18n.changeLanguage(lang.toLowerCase());
      localStorage.setItem("lang", lang.toLowerCase());
    },
    [i18n]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`site-header-one stricky `}
      // className={`site-header-one stricky ${
      //     sticky === true ? "stricky-fixed stricked-menu" : " "
      // }`}
    >
      <div className="container-fluid header">
        <div className="site-header-one__logo mobile-menu">
          <a href="/">
            <img src={LogoImage} width="271" alt="" />
          </a>
          <span className="side-menu__toggler" onClick={() => toggleMenu(true)}>
            <i className="fa fa-bars" />
          </span>
        </div>
        <div className="site-header-one__logo logo-p max-md-hidden">
          <a href="/">
            <img src={LogoImage} width="271" alt="" />
          </a>
        </div>
        <div className="main-nav__main-navigation">
          <NavLinks toggleMenu={toggleMenu} />
        </div>
        <div className="main-nav__right">
          <div className="flex justify-center">
            <div className="relative inline-block text-left">
              <Menu>
                <span className="rounded-md shadow-sm">
                  <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out">
                    {i18n.language.toUpperCase() === 'EN' ? <img src={enicon} alt=""/> :<img src={zhicon} alt=""/> }
                    <i className="ml-1 text-white text-xl fas fa-caret-down" />
                  </Menu.Button>
                </span>

                <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                  <div className="px-4 py-3">
                    <p
                      className="text-sm leading-5 cursor-pointer mb-2"
                      onClick={() => changeLang("en")}
                    >
                      English
                    </p>
                    <p
                      className="text-sm font-medium leading-5 text-gray-900 truncate cursor-pointer"
                      onClick={() => changeLang("zh")}
                    >
                      中文
                    </p>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
