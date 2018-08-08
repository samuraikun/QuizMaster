import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

class QuestionList extends Component {
  constructor(props) {
    super(props);

    this.state = { questions: [] }
  }

  async componentWillMount() {
    const response = await axios.get('/api/questions');
    const questions = response.data;

    this.setState({ questions });
  }


  renderQuestions(questions) {
    return questions.map(question => {
      return (
        <Question key={question.id} question={question} />
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderQuestions(this.state.questions)}
      </ul>
    );
  }
}

export default QuestionList;