import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
  return (
    <Nav className="navbar defaultExpanded navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Ezra Johnson</a>
        </Link>
        <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects">
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/experience">
                <a className="nav-link">Experience</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}
