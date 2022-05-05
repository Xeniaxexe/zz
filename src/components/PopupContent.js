import React from 'react';

export default function PopupContent(props) {
  const { card } = props;

  return (
    <div className='popup__container'>
      <img
        className='popup__img'
        src={card ? card.link : ''}
        alt={card ? card.title : ''}
      />
      <div className='popup__about'>
        <h2 className='popup__title'>{card ? card.title : ''}</h2>
        <div className='popup__rate'></div>
      </div>
    </div>
  );
}
