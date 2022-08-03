import React from "react";
import {  Nav, Navbar} from "react-bootstrap";

function NavBar(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

    return (
    <Navbar fixed="top" bg="dark" >
        <Navbar.Brand href="home">Bb.</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end"> 
        <Nav >   
          {categories.map((category) => (
        <Nav.Item onClick={() => {
          setCurrentCategory(category); 
        }} >
        <Nav.Link href={category.name}  className={`mx-1 ${
          currentCategory.name === category.name && 'navActive'
        }`}
        key={category.name}>{category.name}
        </Nav.Link>
        </Nav.Item>
      ))}
        </Nav>  
    </Navbar.Collapse>
   
    </Navbar>
    )
};

export default NavBar;