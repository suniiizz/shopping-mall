import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "@/routes/Home";
import Detail from "@/routes/Detail";
import About from "@/routes/About";
import Event from "@/routes/Event";
import data from "@/Data";

const App = () => {
  const [productData] = useState(data);
  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
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
                  navigate("/detail");
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

        <Routes>
          <Route path="/" element={<Home productData={productData} />} />
          <Route
            path="/detail/:id"
            element={<Detail productData={productData} />}
          />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>Member</div>} />
            <Route path="location" element={<div>Location</div>} />
          </Route>
          <Route path="/event" element={<Event />}>
            <Route path="1" element={<div>첫 주문 시 이벤트</div>} />
            <Route path="2" element={<div>생일 기념 쿠폰</div>} />
          </Route>
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
