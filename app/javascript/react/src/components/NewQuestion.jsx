import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';


function NewQuestion() {

    const questionsTags = [
        { label: 'Ruby', value: 'Ruby' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'Python', value: 'Python' },
        { label: 'React', value: 'React' },
        { label: 'Rails', value: 'Rails' },
        { label: 'CSS', value: 'CSS' }
    ]


    // const [title, setTitle] = useState('');
    // const [tag, setTag] = useState(questionsTags[0].value);

    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value)
    // }

    // const handleTagChange = (event) => {
    //     setTag(event.target.value)
    // }

    const [formFields, setFormFields] = useState({
        title: '',
        tag: questionsTags[0].value
    })

    const handleQuestionSubmit = (event) => {
        event.preventDefault()
        console.log(formFields)
        createQuestion(formFields)
    }

    const handleFormFields = (event) => {
        setFormFields({ ...formFields, [event.target.name]: event.target.value })
    }

    const createQuestion = (data) => {
        fetch('/api/v1/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Write your question and help other learners</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleQuestionSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className='form-label mt-3 mb-3'>Title</label>
                                <input type="text" className='form-control form-control-lg rounded-3' value={formFields.title} onChange={event => handleFormFields(event)} name="title" />
                            </div>
                            <div className="form-group">
                                <label className='form-label mt-3 mb-3'>Select Question Tag</label>
                                <select className='form-select form-select-lg rounded-3' value={formFields.tag} onChange={event => handleFormFields(event)} name="tag" >
                                    {questionsTags.map((tag) => (<option key={tag.value} value={tag.value}>{tag.label}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Submit Question</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewQuestion;