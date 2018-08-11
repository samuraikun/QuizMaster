import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Question from './Question';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

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
        <Grid item xs={12} key={question.id}>
          <Question question={question} />
        </Grid>
      );
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {this.renderQuestions(this.state.questions)}
        </Grid>
      </div>
    );
  }
}

QuestionList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionList);