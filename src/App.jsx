import React, { useEffect, useState } from 'react'
import { abay, axum, cover, fasiledes, lalibela, sefed, walia } from "./assets";
import SingleCard from './components/singleCard';


const cardImages = [
  { src: abay, matched: false },
  { src: axum, matched: false },
  { src: fasiledes, matched: false },
  { src: lalibela, matched: false },
  { src: sefed, matched: false },
  { src: walia, matched: false },
];

const App = () => {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compared two chices
  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
      }
      else{
        console.log('those cards do not match')
        setTimeout(() => {
          resetTurn()
        }, 1000);
        }
    }
  },[choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">MAtch</h1>
      <button
        className=" border border-white mt-3 p-2 font-mono font-bold rounded-2xl hover:text-black hover:bg-white"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <h1 className=' mt-2'>Turns: {turns}</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 m-3 gap-4">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            handleChoice={handleChoice}
            card={card}
            fliped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App