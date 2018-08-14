import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
});

class QuestionShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      answer: '',
      open: false,
      vertical: 'top',
      horizontal: 'center',
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleMessageClose = () => {
    this.setState({ open: false });
  };

  updateQuestion = async () => {
    const params = {
      title: this.state.title,
      content: this.state.content,
      answer: this.state.answer,
    }

    const response = await axios.put('/api/questions', params);

    if (response.status === 201) {
      console.log(response);

      this.setState({ open: true });
    } else {
      console.log(response);
    }
  }

  deleteQuestion = async () => {
    const response = await axios.delete(`/api/questions/${this.props.question.id}`);

    console.log(response);
  }

  renderQuestionForm() {
    const { classes } = this.props;
    const { vertical, horizontal, open } = this.state;

    return (
      <div className='form-container'>
        <div className='form-title'>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="title-simple">Title</InputLabel>
            <Input id="title-simple" value={this.state.title} onChange={this.handleChange('title')} />
          </FormControl>
        </div>
        <div className='form-content'>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="content-simple">Content</InputLabel>
            <Input id="content-simple" value={this.state.content} onChange={this.handleChange('content')} />
          </FormControl>
        </div>
        <div className='form-answer'>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="answer-simple">Answer</InputLabel>
            <Input id="answer-simple" value={this.state.answer} onChange={this.handleChange('answer')} />
          </FormControl>
        </div>
        <div className='add-question'>
          <Button variant="contained" color="primary" onClick={this.updateQuestion}>
            Update
          </Button>
          <Button variant="contained" color="primary" onClick={this.deleteQuestion}>
            Delete
          </Button>
        </div>
        <Snackbar
          variant="success"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleMessageClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Created!</span>}
        />
      </div>
    );
  }

  render() {
    return (
      <p>{this.props}</p>
    );
  }
}

QuestionShow.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(QuestionShow);