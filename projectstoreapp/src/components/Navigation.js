import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import "./css/estilos.css"
import logo from "../images/logo.svg"

export default function Navigation() {
    return (
        
        <ReactBootStrap.Navbar bg="light" expand="xl">
            {/* lg */}
            <ReactBootStrap.Navbar.Brand href="#home">
                <img src={logo} alt="" width="50" height="44"/>
                React-Bootstrap
            </ReactBootStrap.Navbar.Brand>

            <ReactBootStrap.Form inline>
                <ReactBootStrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2 form-control" />   
                             {/* form-control me-2    mr-sm-2 */}
                <ReactBootStrap.Button variant="outline-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>

            <ReactBootStrap.Navbar.Toggle aria-controls="basic-ReactBootStrap.Navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-ReactBootStrap.Navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#link">Link</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                    </svg>
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                

            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>

    )
}
