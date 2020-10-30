import React from 'react';
import './App.css';


//importar un componente
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      
        <ItemListContainer title="Alimentos"/>

    </div>
  );
}

export default App;
