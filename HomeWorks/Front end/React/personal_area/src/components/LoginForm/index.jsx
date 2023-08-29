import { useState } from 'react';
import './index.css'
function LoginForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
      );
}

export default LoginForm;