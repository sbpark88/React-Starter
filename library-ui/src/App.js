import './App.css';
import { useState } from 'react';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('onsenUi');
  const dateLibrary = {
    onsenUi: <></>,
  };
  const changeLibrary = (library) => () => setCurrentLibrary(library);

  return (
    <>
      <div
        style={{
          padding: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
        }}
      >
        <button onClick={changeLibrary('onsenUi')}>OnsenUi.js</button>
      </div>
      <h1>현재 라이브러리 : {currentLibrary}</h1>
      <hr />
      {dateLibrary[currentLibrary]}
    </>
  );
}

export default App;
