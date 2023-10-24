import React, { useState } from 'react';
import Game from './components/gameComponent';
import Create from './components/createComponent';

function App() {
  // Add functionalityt fot the button
  // need to create an Array with the components to show
  // function will show a different index of it with every click
  // true - false option to show Game or Create component
  // const [count, setCount] = useState()
  // {count} inside the return to have acces to the js functionality
  // if count is true <Game /> false <Create />
  // if(count){
  //     return <Game/>
  // }else{
  //     return <Create/>
  // }
  const [boolCheck, setboolCheck] = useState(true);

  const switchFunc = () => setboolCheck(!boolCheck);

  const swapLogic = boolCheck ? <Create /> : <Game />;

  return (
    <div>
      <h1>Cognition</h1>
      <div className='flashContainer'>
        <button onClick={switchFunc}>Mode button</button>
      </div>
      {swapLogic}
    </div>
  );
}

export default App;
