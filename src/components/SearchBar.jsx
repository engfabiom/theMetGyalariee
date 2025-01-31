import React, { useState } from 'react';
import { useDispatch } from "react-redux"; 
import { theMetSetSearchResult } from "../redux/theMet/actions";
import { apiSearch } from '../api/requests';

import "../css/searchBar.css";
import { IconArrow, IconFilters, IconMagnifyingGlass } from "./SearchBarSVG";


function SearchBar() {

  const dispatch = useDispatch(); 


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [filtersIsHovered, setFiltersIsHovered] = useState(false);

  const [params, setParams] = useState({
    q: '',
    isHighlight: false,
    isOnView: false,
  });


  function handleChange(event) {
    const { type, name, value, checked } = event.target;
    setParams((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
   }

  async function newQ(event) { 
    event.preventDefault(); // prevent native behaviour from form 
    const searchResult = await apiSearch(params);
    if (!searchResult) {
      throw new Error("Search result is empty or invalid");
    }
    dispatch(theMetSetSearchResult(searchResult));
    setIsMenuOpen(false);
  }


  return (
    <div className='search-bar__container'>
      <form onSubmit={newQ} className='search-bar__input-box'> 
        <input
          autocomplete="off"
          name='q'
          value={params.q}
          type='text'
          placeholder='type a keyword'
          className='search-bar__input-text'
          onChange={handleChange}
        />
        <button className='search-bar__input-button'>
          <IconMagnifyingGlass/> 
        </button>
      </form>

      <div 
        className='search-bar__filters-box'
        onClick={toggleMenu}
        onMouseEnter={() => setFiltersIsHovered(true)}
        onMouseLeave={() => setFiltersIsHovered(false)} 
      >
          <IconFilters/>
          <span className='search-bar__filters-text'>filters</span>
          <IconArrow isMenuOpen={isMenuOpen} filtersIsHovered={filtersIsHovered}/> 
      </div>

      {isMenuOpen && (
        <div className='dropdown-menu__container'>
          <label className='dropdown-menu__item'>
            <input
              name='isHighlight'
              checked={params.isHighlight}
              type='checkbox'
              className='dropdown-menu__checkbox'
              onChange={handleChange}
            />{' '}
            Visible at the MET
          </label>
          <label className='dropdown-menu__item'>
            <input
              name='isOnView'
              checked={params.isOnView}
              type='checkbox'
              className='dropdown-menu__checkbox'
              onChange={handleChange}
            />{' '}
            Highlight of the Met
          </label>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
