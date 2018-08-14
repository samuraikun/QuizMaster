import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '80%',
    margin: theme.spacing.unit * 5,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
});

class QuestionsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = { questions: [] }
  }

  async componentWillMount() {
    const response = await axios.get('/api/questions');
    const questions = response.data;

    this.setState({ questions });
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell numeric>Title</TableCell>
              <TableCell numeric>Content</TableCell>
              <TableCell numeric>Answer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.questions.map(question => {
              return (
                <TableRow key={question.id}>
                  <TableCell component="th" scope="row">
                    <Link to={`/questions/${question.id}`}>
                      {question.id}
                    </Link>
                  </TableCell>
                  <TableCell numeric>{question.title}</TableCell>
                  <TableCell numeric>{question.content}</TableCell>
                  <TableCell numeric>{question.answer}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

QuestionsIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionsIndex);