import React from 'react';

const Answer = props => {
  switch (props.result) {
    case null:
      return (
        <p>{''}</p>
      );
    case true:
      return (
        <div>
          <p>Correct!</p>
          <p>Correct Answer: {props.correct_value}</p>
        </div>
      );
    case false:
      return (
        <div>
          <p>Wrong!</p>
          <p>Correct Answer: {props.correct_value}</p>
        </div>
      );
    default:
      return (
        <p>{''}</p>
      );
  }
}

export default Answer;