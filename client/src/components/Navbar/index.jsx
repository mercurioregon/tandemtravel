import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Button from "react-bootstrap/Button";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";
import Logo from '../../../public/blueLogo.png';
//import Homepage from "../pages/Home";


import Auth from '../../utils/auth';

function MainNav() {
  
    const token = Auth.loggedIn() ? Auth.getToken() : null;

  return (
    <div className="nav-container mb-5">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Navbar.Brand href="/#home">
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
                    <Nav.Link as={Link} to='/'>
                        Home
                    </Nav.Link>
                    {token ? 
                        <Nav.Link as={Link} to='events'>
                        Events
                        </Nav.Link>
                         : null
                    }
                    
                    {token ? 
                        <Nav.Link as={Link} to='Huddle'>
                        Huddle
                    </Nav.Link>
                         : null
                    }
                    
                    <Nav.Link as={Link} to='Contact-us'>
                        Contact Us
                    </Nav.Link>
                    

                    {token ? 
                        <Nav.Link as={Link} to='Login'>
                        Logout
                        </Nav.Link>
                         : 
                         <Nav.Link as={Link} to='Login'>
                         Login
                     </Nav.Link>
                    }

                    {token ? 
                        null
                         : 
                         <Nav.Link as={Link} to='Create-account'>
                         Create account
                     </Nav.Link>
                    }
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="content">

        </div>
    </div>
  )
}

export default MainNav;