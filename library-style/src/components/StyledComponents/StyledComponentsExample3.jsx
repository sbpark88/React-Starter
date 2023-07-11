import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

function StyledComponentsExample3() {
  const [darkMode, setDarkMode] = useState(false);
  const changeMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <GlobalStyle $darkMode={darkMode} />
      <input defaultValue='안녕하세요' />
      <button>버튼입니다</button>
      <div>
        <button
          onClick={changeMode}
          style={{
            width: '300px',
            height: '50px',
            margin: '50px',
          }}
        >
          {darkMode ? '라이트 모드로 변경' : '다크 모드로 변경'}
        </button>
      </div>
    </>
  );
}

export default StyledComponentsExample3;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.$darkMode ? 'orange' : '#000')};
    background-color: ${(props) => (props.$darkMode ? '#222' : '#FFF')};
  }
  input {
    color: ${(props) => (props.$darkMode ? 'white' : 'black')};
    background-color: ${(props) => (props.$darkMode ? '#444' : '#FFF')};
  }
  button {
    color: ${(props) => (props.$darkMode ? 'white' : 'black')};
    background-color: ${(props) =>
      props.$darkMode ? 'darkslategray' : '#DDD'};
      border: 1px solid red;
      border-radius: 8px;
      padding: 10px;
      margin: 0 10px;
  }
`;
