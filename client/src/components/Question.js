import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Answer from './Answer';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  formControl: {
    display: 'inline-block',
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answer: '', result: null, correct_value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
  }

  async submitAnswer() {
    try {
      const response = await axios.get(`/api/questions/${this.props.question.id}/answer`, {
        params: {
          answer: this.state.answer
        }
      });

      this.setState({ result: response.data.result, correct_value: response.data.value} );
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              {this.props.question.title}
            </Typography>
            <Typography variant="headline" component="h2">
              {this.props.question.content}
            </Typography>
          </CardContent>
          <CardActions>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="answer">Answer</InputLabel>
              <Input id="answer" onChange={this.handleChange} />
              <Button variant="contained" color="primary" className={classes.button} onClick={this.submitAnswer}>
                Submit
              </Button>
            </FormControl>
            <Answer result={this.state.result} correct_value={this.state.correct_value} />
          </CardActions>
        </Card>
      </div>
    );
  }
};

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);