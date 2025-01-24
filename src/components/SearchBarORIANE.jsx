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
          <svg
            width='33'
            height='33'
            viewBox='0 0 33 33'
      
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_217_909)'>
              <path
                d='M11.567 6.37622L5.85693 15.72H17.2771L11.567 6.37622Z'
   
              />
              <path
                d='M18.5872 6.89526H26.8928V15.2009H18.5872V6.89526Z'
      
              />
              <path
                d='M16.375 26.3737C18.9552 26.3737 21.0469 24.282 21.0469 21.7018C21.0469 19.1216 18.9552 17.0299 16.375 17.0299C13.7948 17.0299 11.7031 19.1216 11.7031 21.7018C11.7031 24.282 13.7948 26.3737 16.375 26.3737Z'
      
              />
            </g>
            <defs>
              <clipPath id='clip0_217_909'>
                <rect
                  width='32.7499'
                  height='32.7499'
                  rx='16.3749'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className='search-bar__filters-text'>filters</span>

        <svg
          className='search-bar__filters-arrowdown-svg'
          width='13'
          height='13'
          viewBox='0 0 13 13'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_46_796)'>
            <path
              d={
                isMenuOpen
                  ? 'M4.01375 8.34717L6.50002 5.86632L8.98628 8.34717L9.75003 7.58341L6.50002 4.33341L3.25 7.58341L4.01375 8.34717Z'
                  : 'M4.01375 4.65283L6.50002 7.13368L8.98628 4.65283L9.75003 5.41659L6.50002 8.6666L3.25 5.41659L4.01375 4.65283Z'
              }
            />
          </g>
          <defs>
            <clipPath id='clip0_46_796'>
              <rect width='13.0001' height='13.0001'/>
            </clipPath>
          </defs>
        </svg>
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
