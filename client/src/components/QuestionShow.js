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
  button: {
    margin: 20
  }
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
      message: ''
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

    try {
      await axios.put(`/api/questions/${this.props.match.params.id}`, params);

      this.setState({ open: true, message: 'Update!' });
    } catch (error) {
      console.log(error);
    }
  }

  deleteQuestion = async () => {
    try {
      await axios.delete(`/api/questions/${this.props.match.params.id}`);

      this.setState({ open: true, message: 'Delete!' });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
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
          <Button className={classes.button} variant="contained" color="primary" onClick={this.updateQuestion}>
            Update
          </Button>
          <Button className={classes.button} variant="contained" color="secondary" onClick={this.deleteQuestion}>
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
          message={<span id="message-id">{this.state.message}</span>}
        />
      </div>
    );
  }
}

QuestionShow.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(QuestionShow);