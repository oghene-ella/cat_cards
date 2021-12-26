import React from 'react';

import './cardcomponent.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='cat'
      src={`https://robohash.org/${props.cat.id}?set=set4&`}
    />
    <h2> {props.cat.username} </h2>
    <p>Origin <b><br/>{props.cat.address.city}<img src={`https://robohash.org/${props.cat.id}?set=set4&size=15x15`}/></b> </p>
  </div>
);