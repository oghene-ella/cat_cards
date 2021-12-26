import React from 'react'

import './searchbox.css';

export const SearchBox = props => (
  <input
    className='search'
    type='search'
    placeholder='Search Cats...'
    onChange={props.handleChange}
  />
);