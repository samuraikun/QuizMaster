import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import QuestionList from './QuestionList';
import Header from './Header';
import AddQuestion from './AddQuestion';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/" component={QuestionList} />
            <Route path="/question/new" component={AddQuestion} />
        </div>
      </Router>
    );
  }
}

export default App;
