import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';



function QuestionDetails(props) {

  const [likeCount, setLikeCount] = useState(props.question.likes_count);
  const [dislikeCount, setDislikeCount] = useState(props.question.dislikes_count);

  const updateQuestionCounter = (data) => {
    fetch(`http://localhost:3000/api/v1/questions/${props.question.id}/update_counter`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch ((error) => {
      console.log(error)
    })
  }

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
    updateQuestionCounter({ count_for: 'like'});
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
    updateQuestionCounter({ count_for: 'dislike' }); 
  };


  return (
    <div className='card rounded-10 mt-3' >
      <div className='card-body'>
        <h3 className='card-title'>{props.question.title}</h3>
        <p className="lead">
          <span className='badge bg-danger'>{props.question.tag}</span>
        </p>
        <button type="button" className="btn btn-primary position-relative" onClick={handleLikeClick} style={{ marginRight: 1 + "em" }}>
          Like
          {
            likeCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {likeCount}
            </span>
          }
        </button>
        <button type="button" className="btn btn-primary position-relative" onClick={handleDislikeClick}>
          Dislike
          {
            dislikeCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {dislikeCount}
            </span>
          }
        </button>
      </div>
    </div>
  )
}

export default QuestionDetails

