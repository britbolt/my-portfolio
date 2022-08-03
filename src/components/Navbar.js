import React from "react";
import {  Nav, Navbar} from "react-bootstrap";

function NavBar(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

    return (
    <Navbar fixed="top" >
  
        <Navbar.Brand href="home">Bb.</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          
<Nav>
      
        {categories.map((category) => (
          
          <Nav.Link className={`mx-1 ${
            currentCategory.name === category.name && 'navActive'
          }`}
          key={category.name}>
            <span onClick={() => {
              setCurrentCategory(category); 
            }}>
            </span>
          </Nav.Link>
        ))}

    </Nav>
    
    </Navbar.Collapse>
   
    </Navbar>
    )
}

export default NavBar;