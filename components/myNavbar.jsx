import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function MyNavbar() {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            style={{
                width: "100vw",
                paddingLeft: "1rem",
                paddingRight: "1rem",
            }}
        >
            <Container
                fluid
                style={{
                    padding: 0,
                    margin: 0,
                }}
            >
                <Navbar.Brand href="/">Ezra Johnson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/experience">Experience</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
