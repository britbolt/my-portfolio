import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Projects from './components/Projects';
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from './components/Navbar';
import { Stack } from "react-bootstrap";
import "./style.css";
import "./App.css";



function App() {
  const [categories] = useState([
    {
      name: "Home",
      description: "main page of the site",
    },
    {
      name: "About",
      description: "information about the site owner",
    },
    {
      name: "Projects",
      description: "brief summary of recent work",  
  },
  {
    name: "Contact",
    description: "contact form",
  },
  {
    name: "Resume",
    description: "resume information and download button",
  },
  ]);
const [currentCategory, setCurrentCategory] = useState(categories[0]); 

  return (   
    <div className="App">
      <NavBar 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}></NavBar>

      <main style={{ padding: "1rem" }}>

       <Stack gap={5}>
      <About></About>

      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      </Stack> 
        </main>
      <Footer />  
    </div>
  );
}

export default App;

