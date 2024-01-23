import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./Data";
import Product from "./Product";

function App() {
  const [camera] = useState(data);

  return (
    <>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Menu</Nav.Link>
              <Nav.Link href="#pricing">Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="main-bg"></div>

        <div className="container mt-4">
          <div className="row justify-content-center">
            {camera.map((item) => {
              return (
                <Product
                  key={item.id}
                  src={
                    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  title={item.title}
                  content={item.content}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
