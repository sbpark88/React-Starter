import './App.css';
import { useState } from 'react';
import OnsenUIExample1 from './components/onsenUi/OnsenUIExample1';
import AntDesignExample1 from './components/antDesign/AntDesignExample1';
import AntDesignExample2 from './components/antDesign/AntDesignExample2';
import SemanticUiExample1 from './components/reactSemanticUi/SemanticUiExample1';
import BootStrapExample1 from './components/bootStrap/BootStrapExample1';
import MaterialUiExample1 from './components/materialUi/MaterialUiExample1';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('materialUi1');
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
        <div>
          <button onClick={changeLibrary('bootstrap1')}>Bootstrap 1</button>
          <button onClick={changeLibrary('materialUi1')}>Material UI 1</button>
        </div>
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
  bootstrap1: <BootStrapExample1 />,
  materialUi1: <MaterialUiExample1 />,
};
