import React from 'react';
import '../stylesheets/style.scss';

const Create = (props) => {
  return (
    <div className='flashContainer'>
      <div className='flashcard'>
        <label>Front: </label>
        <input type='text' placeholder='Enter text here' />
      </div>
      <div className='flashcard'>
        <label>Back: </label>
        <input type='text' placeholder='Enter text here' />
      </div>
      <button className='button'>Submit</button>
      <div className='container'>Flashcard Container</div>
    </div>
  );
};

export default Create;
