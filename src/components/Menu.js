import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";

const Menu = () => {
  return (
    <Container className="headblur">
      <Row>
        <Col>
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <Link
              to="/"
              className="font-nav d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none">
              <img className="img-fluid" src={logo}></img>
            </Link>
            <Nav>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/about">
                  <button type="button" className="me-2 btn-nav">
                    DEMO
                  </button>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                  <button type="button" className="me-2 btn-nav">
                  DOCS
                  </button>
                  </Link>
                </li>
              </ul>
            </Nav>
          </header>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
