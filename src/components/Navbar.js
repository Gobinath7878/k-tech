import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Profile from "../assets/profile.png";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function NavbarHome() {
  const [selectedLink, setSelectedLink] = useState("Users"); // set default selected link to "Users"

  const handleSelect = (eventKey) => {
    setSelectedLink(eventKey);
  };

  return (
    <Navbar bg="light" expand="lg" className="border-navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="py-2">
          <Nav
            className="me-auto m-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            onSelect={handleSelect}
          >
            <Link
              className={`mx-3 py-2 nav-keys ${
                selectedLink === "Clients"
                  ? "selectedLink rounded"
                  : "text-secondary"
              }`}
              eventKey="Clients"
              to="/dashboard"
            >
              Clients
            </Link>
            <Link
              className={`mx-3 py-2 nav-keys ${
                selectedLink === "Orders"
                  ? "selectedLink rounded"
                  : "text-secondary"
              }`}
              eventKey="Orders"
              to="/dashboard"
            >
              Orders
            </Link>
            <Link
              className={`mx-3 py-2 nav-keys ${
                selectedLink === "Messages"
                  ? "selectedLink rounded"
                  : "text-secondary"
              }`}
              eventKey="Messages"
              to="/dashboard"
            >
              Messages
            </Link>
            <Link
              className={`mx-3 px-4 py-2 nav-keys ${
                selectedLink === "Users"
                  ? "selectedLink rounded"
                  : "text-secondary"
              }`}
              eventKey="Users"
            >
             Users
            </Link>
            <Link
              className={`mx-3 py-2 nav-keys ${
                selectedLink === "Dashboard"
                  ? "selectedLink rounded"
                  : "text-secondary"
              }`}
              eventKey="Dashboard"
              to="/dashboard"
            >
              Dashboard
            </Link>
          </Nav>

          <Dropdown className="mx-3">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <Image
                src={Profile}
                rounded
                style={{ height: "40px", width: "50px" }}
                className="mx-2"
              />
              Gobinath S
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
