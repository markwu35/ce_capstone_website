import React, { Component } from 'react';

//import components
import Main from './components/Main';
import Navbar from './components/Navbar';


//import css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <h2>UCSB Computer Engineering</h2>
        <h3>Senior Capstone Projects</h3>
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
