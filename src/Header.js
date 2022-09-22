import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header(){
      return (
        <>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand >D.A.BHORANIYA</Navbar.Brand>
                <Nav className="me-auto">
                  <Link to="./home">Home</Link>&nbsp;&nbsp;s
                  <Link to="./About">About</Link>&nbsp;&nbsp;
                  <Link to="./Contact">Contact</ Link>&nbsp;&nbsp;
                  <Link to="./Student">Student</Link>&nbsp;&nbsp;
                  <Link to="./Student/add">Addstudent</Link>
                </Nav>
              </Container>
            </Navbar>
        </>
      );
    }
export default Header;

// <Link to="./Home"> home </Link>&nbsp;
//         <Link to="./About"> About </Link>&nbsp;
//         <Link to="./Contact"> Contact </Link>&nbsp;