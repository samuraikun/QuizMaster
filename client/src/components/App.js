import React, { Component } from 'react';
import './App.css';
import QuestionList from './QuestionList';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <QuestionList />
      </div>
    );
  }
}

export default App;
