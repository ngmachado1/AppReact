import React from 'react';
import './App.css';
//importar un componente
import Img from './components/img'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <p>
          Edit <code>src/App.js</code> Giselle MAchado
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
