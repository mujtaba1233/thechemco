import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <div className="nav-item">
                        <Nav.Link href="#home">About TCC</Nav.Link>
                    </div>
                    <div className="nav-item">
                        <Link style={{ textDecoration: 'none', display: 'block', padding: '0.5rem 0px', color: '#39758b' }} to='/products'> Products </Link>
                    </div>
                    <NavDropdown title="The View" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                        <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#all-services">All Services</NavDropdown.Item>
                    </NavDropdown>

                    <div className="nav-item">
                        <Link style={{ textDecoration: 'none', display: 'block', padding: '0.5rem 0px', color: '#39758b' }} to='/contact'>Contact Us</Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
