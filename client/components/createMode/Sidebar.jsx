import React, { useEffect, useState } from 'react';

import SidebarListItem from './SidebarListItem';

const CreateModeSidebar = ({ triggerRefresh }) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    async function getAllCards() {
      const response = await fetch('/cards');
      const cards = await response.json();
      setCardList(cards);
    }
    getAllCards();
  }, [triggerRefresh]);

  const sidebarListItems = cardList.map((card, i) => {
    return (
      <SidebarListItem
        key={`sidebarListItem-${i}`}
        id={card.id}
        question={card.question}
        answer={card.answer}
      />
    );
  });

  return (
    <nav className='sidebar'>
      <ul>{sidebarListItems}</ul>
    </nav>
  );
};

export default CreateModeSidebar;
