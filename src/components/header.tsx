import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="border-bottom py-4">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/event");
            }}
          >
            Event
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
      <div className="d-flex gap-2 me-4">
        <Link to="/">HOME</Link>
        <Link to="/detail">DETAIL</Link>
      </div>
    </Navbar>
  );
};

export default Header;
