import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Header></Header>
      </div>
      <div className='About'>
        <About></About>
      </div>
      
    </div>
  );
}


export default App;
