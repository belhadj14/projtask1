
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { RiShoppingBagFill } from "react-icons/ri";
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
   <Navbar bg="light" data-bs-theme="light" className='fixed-top mb-5'>
  <Container className="d-flex justify-content-around fluid">
    <Navbar.Brand as={NavLink} to="/" className='d-flex justify-content-center align-items-center fw-bold fs-6'><span className='d-inline-block text-primary d-flex align-self-center'><RiShoppingBagFill /></span>STORE</Navbar.Brand>
    
    <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/Shop">Shop</Nav.Link>
      <Nav.Link as={NavLink} to="/Cart">Cart</Nav.Link>
      <Nav.Link as={NavLink} to="/Cart" className="position-relative">
  <FaShoppingCart className="fs-4" />
  <span className="position-absolute top-50 start-100 translate-middle badge rounded-circle bg-danger" style={{
        height: "18px", 
        width: "18px", 
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        fontSize: '10px',
        transform: 'translate(-50%, -50%)' // Override Bootstrap's translate-middle if needed
      }}>
    <span className=" text-center ms-auto">10</span>
  </span>
</Nav.Link>
    </Nav>
  </Container>
</Navbar>
  )
}

export default NavBar