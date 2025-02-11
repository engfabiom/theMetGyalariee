import { useState } from "react";
import { apiSearch } from "../api/requests";
import { useDispatch , useSelector} from "react-redux";
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

  const {data: departments} = useSelector(rootReducer=>rootReducer.theMetReducer.departmentsReducer);

  const [params, setParams] = useState({
    departmentId: "*",
    isHighlight: false,
    isOnView: false,
    title: false,
    tags: false,
    artistOrCulture: false,
    q: "",
  });

  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setParams((prev) => {
      switch (type) {
        case "checkbox": return { ...prev, [name]: checked };
        case "radio": return { ...prev, title: false, tags: false, artistOrCulture: false, [value]: checked };
        default: return { ...prev, [name]: value };
      }
      });
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
      title: false,
      tags: false,
      artistOrCulture: false,  
    });
  }

  return (
    <div className="search-bar__container">
      <form onSubmit={newQ} className="search-bar__input-box">
        <input autoComplete="off" name="q" value={params.q} type="text" placeholder="type a keyword" className="search-bar__input-text" onChange={handleChange} />
        <button type="sumit" className="search-bar__input-button"> <IconMagnifyingGlass /> </button>
      </form>
      <div className="search-bar__filters-box" onClick={toggleMenu}> 
        <IconFilters />
        <span className="search-bar__filters-text">filters</span>
        <IconArrow isMenuOpen={isMenuOpen} />
      </div>

      {isMenuOpen && (
        <div className="dropdown-menu__container">
          <label className="dropdown-menu__item"> <input name="isHighlight" checked={params.isHighlight} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} /> Highlight of the Met </label> 
          <label className="dropdown-menu__item"> <input name="isOnView" checked={params.isOnView} type="checkbox" className="dropdown-menu__checkbox" onChange={handleChange} /> Visible at the MET </label>
          <select name="departmentId" value={params.departmentId} onChange={handleChange}>
            <option value="*">All departments</option>
            {departments?.length && departments.map(d => <option key={d.departmentId} value={d.departmentId}>{d.displayName}</option>)}
          </select>
          <fieldset>
            <legend>Search against:</legend>
            <label className="dropdown-menu__item"> <input name="against" checked={!params.title && !params.tags && !params.artistOrCulture} type="radio" className="dropdown-menu__radio" onChange={handleChange} /> All Objects </label>
            <label className="dropdown-menu__item"> <input name="against" value="title" checked={params.title} type="radio" className="dropdown-menu__radio" onChange={handleChange} /> Titles </label>
            <label className="dropdown-menu__item"> <input name="against" value="tags" checked={params.tags} type="radio" className="dropdown-menu__radio" onChange={handleChange} /> Tags </label>
            <label className="dropdown-menu__item"> <input name="against" value="artistOrCulture" checked={params.artistOrCulture} type="radio" className="dropdown-menu__radio" onChange={handleChange} /> Artist or Culture </label>
          </fieldset>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
