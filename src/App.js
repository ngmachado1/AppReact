import React from 'react';
import './App.css';

//importar un componente
import NavBar from './components/NavBar';
import ItemListContainer from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <section className="shopping container">
        <ItemListContainer title="Royal Canin"/>
        <ItemListContainer title="Eukanuba"/>
        <ItemListContainer title="Pedigree"/>
        <ItemListContainer title="vitalCan"/>
        <ItemListContainer title="Eukanuba"/>
        <ItemListContainer title="Pedigree"/>
        <ItemListContainer title="vitalCan"/>
        <ItemListContainer title="Royal Canin"/>

      </section>
    </div>
  );
}

export default App;
