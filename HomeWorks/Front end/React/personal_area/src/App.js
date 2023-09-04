
import './App.css';
import LoginForm from './components/LoginForm';
import { useState } from 'react';
import PersonalInfo from './pages/PersonalInfo';

function App() {
    const [activePage, setActivePage] = useState('personalInfo');
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (user) => {
      setLoggedInUser(user);
    };

    return (
        <div>
          {loggedInUser ? (
            <PersonalInfo user={loggedInUser} />
            ) : (
            <LoginForm onLogin={handleLogin} user={loggedInUser}/>
          )}
        </div>
      );}

export default App;
