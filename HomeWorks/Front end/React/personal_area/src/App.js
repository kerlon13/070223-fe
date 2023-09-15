
import './App.css';
import LoginForm from './components/LoginForm';
import { useState } from 'react';
import PersonalArea from './pages/PersonalArea';
import { Context } from './context';

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);

    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
      setCount(count + 1);
    };

    const removeFromCart = (product) => {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
      setCount(count -1);
    };
    
    const handleLogin = (user) => {
      setLoggedInUser(user);
    };

    return (
      <Context.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        count,
        setCount
      }}
      >
        <div>
          {loggedInUser ? (
            <PersonalArea user={loggedInUser} />
            ) : (
            <LoginForm onLogin={handleLogin} user={loggedInUser}/>
          )}
        </div>
        </Context.Provider>
      );}

export default App;
