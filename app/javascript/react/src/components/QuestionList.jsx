import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import QuestionDetails from './QuestionDetails';
import EmptyQuestionAlert from './EmptyQuestionAlert';
import NewQuestion from './NewQuestion';



function QuestionList() {

    const questionsTags = [
        { label: 'All', value: 0 },
        { label: 'Ruby', value: 1 },
        { label: 'JavaScript', value: 2 },
        { label: 'Python', value: 3 },
        { label: 'React', value: 4 }
    ]
    const [questionsList, setQuestionsList] = useState([]);
    const [selectedTag, setSelectedTag] = useState(questionsTags[0].value);
    const [isShowAlert, setIsShowAlert] = useState(false);


    const questionUrl = 'http://localhost:3000/api/v1/questions';

    const fetchQuestionList = () => {
        fetch(questionUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
                if (data.length == 0) {
                    setIsShowAlert(true)
                } else {
                    setIsShowAlert(false)
                }
            }
            )
    }



    useEffect(() => {
        fetchQuestionList()
    }, [])


    const updateSelectedItem = (event) => {
        setQuestionsList([])
        setSelectedTag(event.target.value)
        fetch(questionUrl + `?tags=${questionsTags[event.target.value].label}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setQuestionsList(data)
                if (data.length == 0) {
                    setIsShowAlert(true)
                } else {
                    setIsShowAlert(false)
                }
            })
    }

    return (
        <div className='row'>
            <div className='col-lg-10'>
                <img src="/images/poster.jpg" alt='poster' style={{ maxWidth: '100%', borderRadius: "10px" }} />
                <p className='lead fw-bold mt-3' style={{ color: "#ed6901", fontSize: "25px" }}>Filter Questions by Tag</p>
                <button type="button" className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Share your Question
</button>
                <select className='form-select form-select-lg rounded-10' value={selectedTag} onChange={event => updateSelectedItem(event)}>
                    {questionsTags.map(tag => (<option key={tag.value} value={tag.value} >{tag.label}</option>))}
                </select>
                {questionsList.length > 0 ?
                    questionsList.map((question) =>
                        <QuestionDetails question={question} key={question.id} />
                    ) : ''}
                {isShowAlert && <EmptyQuestionAlert tagname={questionsTags[selectedTag].label} />}
                
            </div>
    <NewQuestion />
        </div>
    )
}

export default QuestionList