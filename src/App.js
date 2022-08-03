import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './routes/About';
import Home from './components/Home';
import Projects from './routes/Projects';
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";
import Footer from "./components/Footer";
import NavBar from './components/Navbar';
import "./style.css";
import "./App.css";



function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (   
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
      <BrowserRouter>
  <Routes>
      {/* <Route path="/" element={<App />}> */}
      <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
  </BrowserRouter>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;

