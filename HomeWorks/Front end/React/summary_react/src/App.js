import style from "./App.module.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Feedbacks from "./pages/Feedbacks";
import { useState } from "react";
import ButtonRenderer from "./ButtonRender";

function App() {
    return (
        <div className={style.main}>
            <ButtonRenderer />
        </div>
    );
}

export default App;