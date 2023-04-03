import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import AuthModule from './sessions/AuthModule';
import QuestionList from './QuestionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Welcome() {
  const [showAuthModule, setShowAuthModule] = React.useState(false);

  const toggleAuthModule = () => {
    setShowAuthModule(!showAuthModule);
  };

  return (
    <div className='container mt-5' >
      <div className='row'>
        <div className='col-lg-10'>
          <div className="d-flex align-items-center">
            <h1 style={{ color: "#FEBF01" }} className='flex-grow-1'>Welcome to React Rails 7 App</h1>
            <FontAwesomeIcon
              icon={faUser}
              size='2x'
              style={{ cursor: "pointer", color: "#FEBF01" }}
              onClick={toggleAuthModule}
            />
          </div>
        </div>
      </div>
      {showAuthModule && <AuthModule />}
      <div style={{ height: "20px" }}></div>
      <QuestionList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('welcome'));
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

export default Welcome;
