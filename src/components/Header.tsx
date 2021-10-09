import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

import LogoImage from "../assets/images/logo.png";

const Header = ({ open, btnClass, toggleMenu }: any) => {
    const [sticky, setSticky] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 70) {
            setSticky(true);
        } else if (window.scrollY < 70) {
            setSticky(false);
        }
    };

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
                        <img src={LogoImage} width="165" alt="" />
                    </a>
                    <span className="side-menu__toggler" onClick={() => toggleMenu(true)}>
            <i className="fa fa-bars" />
          </span>
                </div>
                <div className="site-header-one__logo logo-p max-md-hidden">
                    <a href="/">
                        <img src={LogoImage} width="165" alt="" />
                    </a>
                </div>
                <div className="main-nav__main-navigation">
                    <NavLinks toggleMenu={toggleMenu} />
                </div>
                <div className="main-nav__right">
                </div>
            </div>
        </header>
    );
};

export default Header;
