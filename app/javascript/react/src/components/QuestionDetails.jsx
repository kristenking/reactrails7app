import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

function QuestionDetails(props) {

    const [likeCount, setLikeCount] = useState(0)
    
  return (
    <div className='card rounded-10 mt-3' >
    <div className='card-body'>
        <h3 className='card-title'>{props.question.title}</h3>
        <p className="lead">
            <span className='badge bg-danger'>{props.question.tag}</span>
            </p>
    <button className='btn btn-primary mt-1' onClick={() => setLikeCount(likeCount + 1)}>Like</button>
    {
        likeCount > 0 && <span className='badge bg-primary ms-1'>{likeCount}</span>
    }
    </div>
</div>
  )
}

export default QuestionDetails