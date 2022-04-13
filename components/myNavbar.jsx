import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";

export default function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Ezra Johnson</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/experience">Experience</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
