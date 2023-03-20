import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import QuestionList from './QuestionList';


function Welcome() {
    return (
        <div className='container mt-5'>
            <h1 style={{color:"#FEBF01"}}>Welcome to React Rails 7 App</h1>
            <QuestionList />
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'));
root.render(
    <React.StrictMode>
        <Welcome />
    </React.StrictMode>
);


export default Welcome