import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../navbar.css';


class NavigationBar extends React.Component{
  render() {
      return (
        <Navbar className="nav-bg" bg="dark" variant="dark">
         <Link className="navbar-header" to={"/"}> Cenk Gürses</Link> 
        <Nav className="mr-auto">
          <Link className="navigation-link" to={"/portfolio"}> Portfolio</Link> 
          <Link className="navigation-link" to={"/experience"}> Experience</Link>
          <Link className="navigation-link" to={"/contact"}> Contact</Link>
          <Link className="navigation-link" to={"/skills"}> Skills</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="dark">Search</Button>
        </Form>
      </Navbar>
      );
  }
}

export default NavigationBar;