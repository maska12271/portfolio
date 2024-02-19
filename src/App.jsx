// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import {readCookie} from "./Utils/Cookies.js";

//pages
import UnexcitingPage from "../src/Pages/UnexcitingPage.jsx"
import Header from "../src/Pages/Header.jsx"
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Resume from "./Pages/Resume.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio/portfolio" element={<Header/>}>
                    <Route index element={<Home />}/>
                    <Route path="/portfolio/projects" element={<Projects />}/>
                    <Route path="/portfolio/resume" element={<Resume />}/>
                    <Route path="/portfolio/about" element={<About />}/>
                    <Route path="/portfolio/contact" element={<Contact />}/>
                </Route>
                <Route path="/portfolio/*" element={<UnexcitingPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App