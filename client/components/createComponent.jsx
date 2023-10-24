import React, { useState, useEffect } from 'react';
import '../stylesheets/style.scss';

import CreateModeSidebar from './createMode/Sidebar';

//
const Create = (props) => {
  const defaultFormValues = {
    question: '',
    answer: '',
  };

  const [cardContent, setCardContent] = useState({
    question: '',
    answer: '',
  });

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [refreshSidebar, setRefreshSidebar] = useState(false);

  useEffect(() => {
    if (cardContent.question && cardContent.answer) {
      async function createCardContent() {
        const response = await fetch('/cards', {
          method: 'POST',
          body: JSON.stringify(cardContent),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setFormValues(defaultFormValues);
        setRefreshSidebar(!refreshSidebar);
      }
      createCardContent();
    }
  }, [cardContent]);

  const handleSubmit = () => {
    setCardContent(formValues);
  };

  return (
    <div className='flashContainer'>
      <div className='flashcard'>
        <label>Front: </label>
        <input
          type='text'
          placeholder='Enter text here'
          value={formValues.question}
          onChange={(e) =>
            setFormValues({ ...formValues, question: e.target.value })
          }
        />
      </div>
      <div className='flashcard'>
        <label>Back: </label>
        <input
          type='text'
          placeholder='Enter text here'
          value={formValues.answer}
          onChange={(e) =>
            setFormValues({ ...formValues, answer: e.target.value })
          }
        />
      </div>
      <button className='button' onClick={handleSubmit}>
        Submit
      </button>
      <CreateModeSidebar triggerRefresh={refreshSidebar} />
    </div>
  );
};

export default Create;
