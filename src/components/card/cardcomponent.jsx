import React from 'react';

import './cardcomponent.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.cat.id}?set=set4&`}
    />
    <h2> {props.cat.username} </h2>
    <p>Origin <b><br/>{props.cat.address.city}</b> </p>
  </div>
);