import './App.css';
import { useState } from 'react';
import OnsenUIExample1 from './components/onsenUi/OnsenUIExample1';
import AntDesignExample1 from './components/antDesign/AntDesignExample1';
import AntDesignExample2 from './components/antDesign/AntDesignExample2';
import SemanticUiExample1 from './components/reactSemanticUi/SemanticUiExample1';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('semanticUi1');
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
          <button onClick={changeLibrary('antDesign1')}>Ant Design 1</button>
          <button onClick={changeLibrary('antDesign2')}>Ant Design 2</button>
          <button onClick={changeLibrary('semanticUi1')}>Semantic UI 1</button>
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
  antDesign1: <AntDesignExample1 />,
  antDesign2: <AntDesignExample2 />,
  semanticUi1: <SemanticUiExample1 />,
};
