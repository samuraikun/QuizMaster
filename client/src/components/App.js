import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Header';
import QuestionList from './QuestionList';
import QuestionNew from './QuestionNew';
import QuestionsIndex from './QuestionsIndex';
import QuestionShow from './QuestionShow';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/questions/:id" component={QuestionShow} />
            <Route path="/question/new" component={QuestionNew} />
            <Route path="/questions" component={QuestionsIndex} />
            <Route exact path="/" component={QuestionList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
