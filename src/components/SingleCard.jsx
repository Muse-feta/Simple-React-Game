import React from 'react'
import { cover } from '../assets';

const SingleCard = ({card, handleChoice, fliped}) => {
     const handleClick = () => {
        handleChoice(card)
     };
  return (
    <div className=" mt-5 rounded-2xl card">
      <div className={fliped ? 'flipped' : ''}>
        <div >
          <img 
            className={`front h-[200px] w-[300px] rounded-2xl`}
            src={card.src}
            alt=""
          />
        </div>
        <div >
          <img
            className=" back h-[200px] w-[300px] rounded-2xl"
            onClick={handleClick}
            src={cover}
            alt="cardBack"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleCard