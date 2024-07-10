import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from '../assets/TandemLogo100px.png';



export default function MainNav() {
  return (
    <div className="nav-container mb-5">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top m-auto"
                    alt="Brand Name logo"
                />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse-id" />
            <Navbar.Collapse id="navbar-collapse-id">
                <Nav>
                    <Nav.Link href="">
                        Send invite
                    </Nav.Link>
                    <Nav.Link href="">
                        Blog
                    </Nav.Link>
                    <Nav.Link href="">
                        Huddle
                    </Nav.Link>
                    <Nav.Link href="">
                        Contact Us
                    </Nav.Link>
                    <Nav.Link href="">
                        Login
                    </Nav.Link>
                    <Nav.Link href="">
                        Create account
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="content">

        </div>
    </div>
  )
}
