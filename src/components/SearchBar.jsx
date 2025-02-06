import { useState } from "react";
import { apiSearch } from "../api/requests";
import { useDispatch } from "react-redux";
import {
  theMetCleanObjects,
  theMetSetSearchResult,
} from "../redux/theMet/actions";

import { IconArrow, IconFilters, IconMagnifyingGlass } from "./SearchBarSVG";

import "../css/searchBar.css";

function SearchBar() {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [params, setParams] = useState({
    q: "",
    isHighlight: false,
    isOnView: false,
    title: false,
    tags: false,
    artistOrCulture: false,
  });

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setParams((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function newQ(event) {
    event.preventDefault();
    dispatch(theMetCleanObjects());
    dispatch(theMetSetSearchResult(apiSearch(params)));
    setIsMenuOpen(false);
    setParams({
      q: "",
      isHighlight: false,
      isOnView: false,
    });
  }

  // submit tag
  return (
    <div className="search-bar__container">
      <form onSubmit={newQ} className="search-bar__input-box">
        <input autoComplete="off"  name="q" value={params.q} type="text" placeholder="type a keyword" className="search-bar__input-text" onChange={handleChange} />
        <button type="sumit" className="search-bar__input-button"><IconMagnifyingGlass /></button>
      </form>
      <div className="search-bar__filters-box" onClick={toggleMenu}>
        <IconFilters />
        <span className="search-bar__filters-text">filters</span>
        <IconArrow isMenuOpen={isMenuOpen} />
      </div>

      {isMenuOpen && (
        <div className="dropdown-menu__container">
          <label className="dropdown-menu__item">
            <input name="isHighlight" checked={params.isHighlight} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} />
            Highlight of the Met
          </label>
          <label className="dropdown-menu__item">
            <input name="isOnView" checked={params.isOnView} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} />
            Visible at the MET
          </label>
          <label className="dropdown-menu__item">
            <input name="title" checked={params.title} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} />
            Search against titles
          </label>
          <label className="dropdown-menu__item">
            <input name="tags" checked={params.tags} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} />
            Search against tags
          </label>
          <label className="dropdown-menu__item">
            <input name="artistOrCulture" checked={params.artistOrCulture} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} />
            Searching against the artist name or culture
          </label>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
