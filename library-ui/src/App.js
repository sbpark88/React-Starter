import './App.css';
import { useState } from 'react';
import OnsenUIExample1 from './components/onsenUi/OnsenUIExample1';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('onsenUi1');
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
          <button onClick={changeLibrary('onsenUi1')}>OnsenUi.js 1</button>
          <button onClick={changeLibrary('onsenUi1')}>OnsenUi.js 2</button>
        </div>
        <div></div>
      </div>
      <h1>현재 라이브러리 : {currentLibrary}</h1>
      <hr />
      {dateLibrary[currentLibrary]}
    </>
  );
}

export default App;

const dateLibrary = {
  onsenUi1: <OnsenUIExample1 />,
};
