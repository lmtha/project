import React, { Component } from 'react';
import logo from './logo.svg';
import Course from './components/Course';
import './App.css';
class App extends Component {
  render() {
    return (
         
      <div className="row">
          <Course/> 
          <Course/> 
          <Course/> 
      </div>
    );
  }
}

export default App;
