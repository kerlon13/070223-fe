import { useEffect, useState } from 'react';
import './index.css'
import Modal from '../Modal';

function LoginForm({onLogin}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    // const [user, setUser] = useState('');
    const [isModal, setModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`;

        fetch(url)
        .then((response) => response.json())
        .then((data) => data.length ? onLogin(data[0]) : setModal(true));   
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <h2>Authorization</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
        {isModal && <Modal isModal={isModal} setModal={setModal}/>}
        </div>
      );
}

export default LoginForm;