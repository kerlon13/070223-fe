import style from "./App.module.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Feedbacks from "./pages/Feedbacks";
import { useState } from "react";


function App() {
  const [isHomePage, setHomePage] = useState(true);
  const [isAboutPage, setAboutPage] = useState(false);
  const [isContactsPage, setContactsPage] = useState(false);
  const [isFeedbacksPage, setFeedbacksPage] = useState(false);
  const [isBlogPage, setBlogPage] = useState(false);
  

  function handleHomePage() {
    setHomePage(true);
    setAboutPage(false);
    setContactsPage(false);
    setFeedbacksPage(false);
    setBlogPage(false);
  }
  function handleAboutPage() {
    setHomePage(false);
    setAboutPage(true);
    setContactsPage(false);
    setFeedbacksPage(false);
    setBlogPage(false);
  }
  function handleContactsPage() {
    setHomePage(false);
    setAboutPage(false);
    setContactsPage(true);
    setFeedbacksPage(false);
    setBlogPage(false);
  }
  function handleFeedbacksPage() {
    setHomePage(false);
    setAboutPage(false);
    setContactsPage(false);
    setFeedbacksPage(true);
    setBlogPage(false);
  }
  function handleBlogPage() {
    setHomePage(false);
    setAboutPage(false);
    setContactsPage(false);
    setFeedbacksPage(false);
    setBlogPage(true);
  }

  const [content, setContent] = useState("");
  function handlChange(event) {
    setContent(event.target.value);
  }
  return (<div className={style.main}>
    <button onClick={handleHomePage}>Home</button>
    <button onClick={handleAboutPage}>About</button>
    <button onClick={handleContactsPage}>Contacts</button>
    <button onClick={handleBlogPage}>Blog</button>
    <button onClick={handleFeedbacksPage}>Feedbacks</button>
    <input value={content} onChange={handlChange}></input>
    {isHomePage && <Home />}
    {isAboutPage && <About />}
    {isContactsPage && <Contacts />}
    {isFeedbacksPage && <Feedbacks />}
    {isBlogPage && <Blog />}

  </div>);
    
  
}

export default App;

