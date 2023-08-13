import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Feedbacks from './pages/Feedbacks';
import Blog from './pages/Blog';

const pages = [
  { id: 'home', label: 'Home', component: <Home /> },
  { id: 'blog', label: 'Blog', component: <Blog /> },
  { id: 'about', label: 'About', component: <About /> },
  { id: 'contacts', label: 'Contacts', component: <Contacts /> },
  { id: 'feedbacks', label: 'Feedbacks', component: <Feedbacks /> },
];

const ButtonRenderer = () => {
  const [activePage, setActivePage] = useState('home');

  const handleButtonClick = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div>
      {pages.map(({id, label}) => (
        <button key={id} onClick={() => handleButtonClick(id)}>
          {label}
        </button>
      ))}
        <div>
            {activePage && pages.find((page) => page.id === activePage).component}
        </div>
    </div>
  );
};

export default ButtonRenderer;
