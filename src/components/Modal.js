import React from 'react';
import './Modal.css';
import Content from './Content';
import Popup from './Popup';
import { cardList } from '../scripts/constants';
function Modal({ setOpenModal }) {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const closePopup = () => {
    setSelectedCard(null);
  };

  const handleCardClick = (card, i) => {
    setSelectedCard(card);
    setInd(i);
  };

  const [ind, setInd] = React.useState(null);

  const handlePrevCard = () => {
    setSelectedCard(cardList[ind - 1]);
    setInd(ind - 1);
  };

  const handleNextCard = () => {
    setSelectedCard(cardList[ind + 1]);
    setInd(ind + 1);
  };
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className='title'>
          <h1>Наши любимые питомцы</h1>
        </div>
        <div className='body'>
          <>
            <Content onCardClick={handleCardClick}></Content>

            <Popup
              card={selectedCard}
              onClose={closePopup}
              prevCard={handlePrevCard}
              nextCard={handleNextCard}
            ></Popup>
          </>
        </div>
      </div>
    </div>
  );
}

export default Modal;
