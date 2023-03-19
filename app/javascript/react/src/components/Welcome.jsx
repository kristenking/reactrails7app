import * as React from 'react';
import * as ReactDOM from 'react-dom';
import QuestionList from './QuestionList';

function Welcome() {
  return (
    <div className='container'> 
      <h1>Welcome to React Rails 7 App</h1>
      <QuestionList />
    </div>
 
  )
}

document.addEventListener('DOMContentLoaded', () => {ReactDOM.render(<Welcome />, document.getElementById('welcome'))});

export default Welcome