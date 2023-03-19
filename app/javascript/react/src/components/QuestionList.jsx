import * as React from 'react';
import * as ReactDOM from 'react-dom';


function QuestionList() {
    questionsList = [
        {
            id: 1,
            title: "What is Ruby's method for creating arrays?",
            tag: "Ruby"
        },
        {
            id: 2,
            title: "How do you define a method in Ruby?",
            tag: "Ruby"
        },
        {
            id: 3,
            title: "What is a block in Ruby?",
            tag: "Ruby"
        },
        {
            id: 4,
            title: "How do you install a gem in Ruby?",
            tag: "Ruby"
        },
        {
            id: 5,
            title: "What is the difference between 'puts' and 'print' in Ruby?",
            tag: "Ruby"
        },
        {
            id: 6,
            title: "How do you handle errors in Ruby?",
            tag: "Ruby"
        },
        {
            id: 7,
            title: "What is a class in Ruby?",
            tag: "Ruby"
        }
    ]

    return (
        <div className='row'>
            <div className='col-lg-10 mx-auto'>
                {questionsList.map((question) =>
                    <div className='card rounded-10 mt-3' key={question.id}>
                        <div className='card-body'>
                            <h3 className='card-title'>{question.title}</h3>
                            <p className="lead"><span className='badge bg-danger'>{question.tag}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuestionList