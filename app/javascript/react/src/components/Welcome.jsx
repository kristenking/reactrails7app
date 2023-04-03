import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Login from './sessions/Login';
import Signup from './sessions/Signup';
import Logout from './sessions/Logout';
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
    <div className='container mt-5'>
      <div className="d-flex align-items-center">
        <h1 style={{ color: "#FEBF01" }}>Welcome to React Rails 7 App</h1>
        <FontAwesomeIcon
          icon={faUser}
          className="ml-3"
          style={{ cursor: "pointer" }}
          onClick={toggleAuthModule}
        />
      </div>
      <Login />
      <Signup />
      <Logout />
      {showAuthModule && <AuthModule />}
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
