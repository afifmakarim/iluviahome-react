import React from 'react'
import {
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Container
} from 'react-bootstrap';
// import Logo from '../components/Logo'

const Navigation = () => {
    return (
        <div>
            <Navbar variant="custom" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">iluvia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Showcase</Nav.Link>
                            <Nav.Link href="#link">Catalog</Nav.Link>
                            <Nav.Link href="#link">Reviews</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
