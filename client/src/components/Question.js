import React from 'react';

const Question = ({ question }) => {
  return (
    <li>
      {question.content}
    </li>
  );
};

export default Question;