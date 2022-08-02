import React, { useState, useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./style.css";
import "./App.css";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
    
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;

