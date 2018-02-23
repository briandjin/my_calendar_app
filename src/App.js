import React, { Component } from 'react';
// import DatePicker from './components/DatePicker/DatePicker.js'
import logo from './assets/RT-Header-Logo.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state - {
      date: "asdf",
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
          
        </header>

        <div className="main">
        </div>
        
      </div>
    );
  }
}

export default App;
