import React from 'react'
import * as ReactDOM from 'react-dom';

function EmptyQuestionAlert(props) {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show mt-4" role="alert">
                <strong>Oops! No questions found with the tag: {props.tagname} .</strong>  Please, select another option from the list.😉
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default EmptyQuestionAlert