import React, { Component } from 'react';
import './App.css';
import SortableComponent from './sortable.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UPLOAD YOUR PHOTOS</h1>
        </header>
        <div className="dragParent"><SortableComponent/></div>
      </div>
    );
  }
}


export default App;
