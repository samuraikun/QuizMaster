import React, { Component } from 'react';
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
    position: 'center',
  },
});

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = { answer: '' }

    this.handleChange = this.handleChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
  }

  submitAnswer() {
    console.log(this.state.answer);
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