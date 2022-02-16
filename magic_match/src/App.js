import './App.css'
import {useEffect, useState} from 'react'
import SingleCard from './componants/SingleCard'

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false},
  { "src": "/img/potion-1.png", matched: false},
  { "src": "/img/ring-1.png", matched: false},
  { "src": "/img/scroll-1.png", matched: false},
  { "src": "/img/shield-1.png", matched: false},
  { "src": "/img/sword-1.png", matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (choiceOne && choiceTwo){
      setDisabled(true)
      choiceOne.src === choiceTwo.src ? setCards(prevCards => {return prevCards.map(card => {
        if(card.src === choiceOne.src){
          return {...card, matched: true}
        } else {
          return card
        }
      })} ) : console.log('don\'t match')
      setTimeout( () =>  resetTurn(), 1000)
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
 
  // handle a choice 
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)
    setDisabled(false)
  }

  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard disabled={disabled} flipped={card === choiceOne || card === choiceTwo || card.matched} handleChoice={handleChoice} key={card.id} card={card}/>
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App