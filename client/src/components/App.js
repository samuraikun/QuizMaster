import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import QuestionList from './QuestionList';
import QuestionNew from './QuestionNew';
import QuestionsIndex from './QuestionsIndex';
// import QuestionShow from './QuestionShow';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={QuestionList} />
          <Route path="/question/new" component={QuestionNew} />
          <Route path="/questions/index" component={QuestionsIndex} />
        </div>
      </Router>
    );
  }
}

export default App;
