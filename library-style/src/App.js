import './App.css';
import EmotionExample from './components/Emotion/EmotionExample';
import StyledComponentsExample from './components/StyledComponents/StyledComponentsExample';
import React, { useState } from 'react';
import StyledComponentsExample2 from './components/StyledComponents/StyledComponentsExample2';
import StyledComponentsExample3 from './components/StyledComponents/StyledComponentsExample3';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('emotion');
  const changeLibrary = (library) => () => setCurrentLibrary(library);

  return (
    <>
      <div
        style={{
          padding: '30px',
          display: 'grid',
          justifyContent: 'space-evenly',
          gap: '30px',
        }}
      >
        <div>
          <button onClick={changeLibrary('styledComponents')}>
            Styled-Components.js
          </button>
          <button onClick={changeLibrary('styledComponents2')}>
            Styled-Components.js 2
          </button>
          <button onClick={changeLibrary('styledComponents3')}>
            Styled-Components.js 3
          </button>
        </div>
        <div>
          <button onClick={changeLibrary('emotion')}>Emotion.js</button>
        </div>
      </div>
      <h1>현재 라이브러리 : {currentLibrary}</h1>
      <hr />
      {styleLibrary[currentLibrary]}
    </>
  );
}

export default App;

const styleLibrary = {
  styledComponents: <StyledComponentsExample />,
  styledComponents2: <StyledComponentsExample2 />,
  styledComponents3: <StyledComponentsExample3 />,
  emotion: <EmotionExample />,
};

const divStyle = {};
