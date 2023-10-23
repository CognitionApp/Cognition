import React, { useState, useEffect } from 'react';
import '../stylesheets/style.scss';

const Game = (props) => {
  // showCard --> flipCard --> newCard
  const [nextAction, setNextAction] = useState('newCard');
  const [cardContent, setCardContent] = useState({});

  useEffect(() => {
    if (nextAction === 'newCard') {
      async function getNewCard() {
        // do the fetch
        const response = await fetch('/cards/next');
        const cardData = await response.json();
        setCardContent(cardData);
        setNextAction('showCard');
      }
      getNewCard();
    }
  }, [nextAction]);

  // determine whether clicking on the card should flip the card
  // over to reveal the answer, or get a new card from the db
  const handleClick = () => {
    switch (nextAction) {
      case 'showCard':
        setNextAction('flipCard');
        break;
      case 'flipCard':
        setNextAction('newCard');
        break;
      default:
        break;
    }
  };

  let displayOutput;
  if (nextAction === 'showCard') {
    // we have a new card, so display the question side
    displayOutput = cardContent.question;
  } else {
    // one of two states:
    // 1) we just flipped the card, or
    // 2) we triggered loading in a new card, but
    //    that card hasn't been fetched from the
    //    server yet.
    // in either case, show (or continue showing) the
    // answer side of the card.
    displayOutput = cardContent.answer;
  }

  return (
    <div className='flashContainer'>
      <div className='flashcard' onClick={handleClick}>
        {displayOutput}
      </div>
    </div>
  );
};

export default Game;
