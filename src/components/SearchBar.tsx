import React, { useCallback, useState } from "react";
import search_icon from "../assets/images/icons/search.png";

const SearchBar: React.FC = () => {
  const filters = [
    { category: "All", active: true },
    { category: "Wallets", active: false },
    { category: "Dapps", active: false },
    { category: "Tools", active: false },
    { category: "Bridges", active: false },
  ];

  const [filter, setFilter] = useState(filters);

  const handle = useCallback((categroy) => {
    setFilter((e) => {
      return e.map((e) => {
        e.active = e.category === categroy;
        return e;
      });
    });
  }, []);

  return (
    <>
      <div className="search-bar ">
        <div className="search-btn overflow-hidden">
          <img src={search_icon} alt="" />
          <input type="text" placeholder="SEARCH..." />
        </div>
        <div className="filter-box flex flex-grow justify-items-auto justify-between gap-2">
          {filter.map((e) => {
            return (
              <div
                className={`btn ${e.active ? "active" : ""}`}
                key={e.category}
                onClick={() => handle(e.category)}
              >
                {e.category}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
