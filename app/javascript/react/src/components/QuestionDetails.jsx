import * as React from 'react';
import * as ReactDOM from 'react-dom';

function QuestionDetails(props) {
  return (
    <div className='card rounded-10 mt-3' >
    <div className='card-body'>
        <h3 className='card-title'>{props.question.title}</h3>
        <p className="lead"><span className='badge bg-danger'>{props.question.tag}</span></p>
    </div>
</div>
  )
}

export default QuestionDetails