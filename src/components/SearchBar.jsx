import React, { useState } from 'react';
import { getArrayObj } from '../helpers/getArrayObj';

function SearchBar({ setTheMetObject }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const [params, setParams] = useState({
    q: '',
    isHighlight: false,
    isOnView: false,
  });

  // function handleCheck(event) {
  //   const { name, checked } = event.target;
  //   setAreChecked((preValue) => {
  //     return { ...preValue, [name]: checked };
  //   });
  // }

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
        <input
          name='q'
          value={params.q}
          type='text'
          placeholder='type a keyword'
          className='search-bar__input-text'
          onChange={handleChange}
        />
        <button className='search-bar__input-button' onClick={newQ}>
          <svg
            width='43'
            height='43'
            viewBox='0 0 43 43'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_223_1106)'>
              <path
                d='M25.8069 24.0864H24.9008L24.5796 23.7767C25.7037 22.4692 26.3804 20.7717 26.3804 18.925C26.3804 14.8074 23.0427 11.4697 18.925 11.4697C14.8074 11.4697 11.4697 14.8074 11.4697 18.925C11.4697 23.0427 14.8074 26.3804 18.925 26.3804C20.7717 26.3804 22.4692 25.7037 23.7767 24.5796L24.0864 24.9008V25.8069L29.8213 31.5303L31.5303 29.8213L25.8069 24.0864ZM18.925 24.0864C16.0691 24.0864 13.7637 21.781 13.7637 18.925C13.7637 16.0691 16.0691 13.7637 18.925 13.7637C21.781 13.7637 24.0864 16.0691 24.0864 18.925C24.0864 21.781 21.781 24.0864 18.925 24.0864Z'
                fill='white'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_223_1106'
                x='6.88184'
                y='11.4697'
                width='29.2363'
                height='29.2363'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='4.58789' />
                <feGaussianBlur stdDeviation='2.29395' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_223_1106'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_223_1106'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </button>
      </div>

      <div className='search-bar__categories-box' onClick={toggleMenu}>
        <div className='search-bar__categories-icon'>
          <svg
            width='33'
            height='33'
            viewBox='0 0 33 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_217_909)'>
              <path
                d='M11.567 6.37622L5.85693 15.72H17.2771L11.567 6.37622Z'
                fill='black'
              />
              <path
                d='M18.5872 6.89526H26.8928V15.2009H18.5872V6.89526Z'
                fill='black'
              />
              <path
                d='M16.375 26.3737C18.9552 26.3737 21.0469 24.282 21.0469 21.7018C21.0469 19.1216 18.9552 17.0299 16.375 17.0299C13.7948 17.0299 11.7031 19.1216 11.7031 21.7018C11.7031 24.282 13.7948 26.3737 16.375 26.3737Z'
                fill='black'
              />
            </g>
            <defs>
              <clipPath id='clip0_217_909'>
                <rect
                  width='32.7499'
                  height='32.7499'
                  rx='16.3749'
                  fill='white'
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className='search-bar__categories-text'>Categories</span>

        <svg
          className={
            isMenuOpen
              ? 'search-bar__categories-arrowup-svg'
              : 'search-bar__categories-arrowdown-svg'
          }
          width='13'
          height='13'
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_46_796)'>
            <path
              d={
                isMenuOpen
                  ? 'M4.01375 8.34717L6.50002 5.86632L8.98628 8.34717L9.75003 7.58341L6.50002 4.3334L3.25 7.58341L4.01375 8.34717Z'
                  : 'M4.01375 4.65283L6.50002 7.13368L8.98628 4.65283L9.75003 5.41659L6.50002 8.6666L3.25 5.41659L4.01375 4.65283Z'
              }
            />
          </g>
          <defs>
            <clipPath id='clip0_46_796'>
              <rect width='13.0001' height='13.0001' fill='white' />
            </clipPath>
          </defs>
        </svg>

        <svg
          className='search-bar__categories-arrowdown-svg'
          width='13'
          height='13'
          viewBox='0 0 13 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_46_796)'>
            <path
              fill='black'
              d={
                isMenuOpen
                  ? 'M4.01375 8.34717L6.50002 5.86632L8.98628 8.34717L9.75003 7.58341L6.50002 4.33341L3.25 7.58341L4.01375 8.34717Z'
                  : 'M4.01375 4.65283L6.50002 7.13368L8.98628 4.65283L9.75003 5.41659L6.50002 8.6666L3.25 5.41659L4.01375 4.65283Z'
              }
            />
          </g>
          <defs>
            <clipPath id='clip0_46_796'>
              <rect width='13.0001' height='13.0001' fill='white' />
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
