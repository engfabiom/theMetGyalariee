import React, { useState } from 'react';
import { IconCatArrow, Iconfilters, IconMagnifyingGlass } from "./IconsSVG";

import { getArrayObj } from '../helpers/getArrayObj';
import "../css/searchBar.css";

function SearchBar({ setTheMetObject }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

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

  async function newQ() {
    if (!params.q) return;
    await getArrayObj(2, params, (response) => {
      setTheMetObject(new Set(response));
    });
    setIsMenuOpen(false);
  }

  return (
    <div className='search-bar__container'>
      <div className='search-bar__input-box'>
        <form onSubmit={newQ}> 
          <input
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
      </div>

      <div className='search-bar__filters-box' onClick={toggleMenu}>
        <div className='search-bar__filters-icon'>
          <IconFilters/>
        </div>
        <span className='search-bar__filters-text'>filters</span>
        <IconFilterArrow isMenuOpen={isMenuOpen}/> 
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
