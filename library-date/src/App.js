import { useState } from 'react';
import './App.css';

import DayExample from './components/Dayjs/DayExample';
import MomentExample from './components/Momentjs/MomentExample';
import DateFnsExample from './components/Dayjs/DateFnsExample';

function App() {
  const [currentLibrary, setCurrentLibrary] = useState('dateFns');
  const dateLibrary = {
    moment: <MomentExample />,
    day: <DayExample />,
    dateFns: <DateFnsExample />,
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
        <button onClick={changeLibrary('moment')}>Moment.js</button>
        <button onClick={changeLibrary('day')}>Day.js</button>
        <button onClick={changeLibrary('dateFns')}>date-fns.js</button>
      </div>
      <h1>현재 라이브러리 : {currentLibrary}</h1>
      <hr />
      {dateLibrary[currentLibrary]}
    </>
  );
}

export default App;
