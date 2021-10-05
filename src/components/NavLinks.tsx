import React, { useState, useCallback, useEffect } from "react";

const NavLinks = ({ toggleMenu }: any) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };

  return (
    <ul className="main-nav__navigation-box" style={{ marginLeft: 0 }}></ul>
  );
};

export default NavLinks;
