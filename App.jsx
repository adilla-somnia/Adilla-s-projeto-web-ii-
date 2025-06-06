import React,{ useState } from 'react';
import ListaProdutos from './components/ListaProdutos';
import './App.css';

function App() {

  return (
    <div id="app">
      <nav className="navbar">
        <h1 id="marca">Adilla's</h1>
        <div className="icone-carrinho">
          🛒 <span className="contador">0</span>
        </div>
      </nav>
      <h1>tudo o que você pode imaginar</h1>
      <ListaProdutos />
    </div>
  );
}

export default App;
