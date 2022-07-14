import React from 'react';
import Divider2 from "../components/Divider2";
import { Container, Row, Col } from "react-bootstrap";
import line from "../assets/img/line-dec.png";
import webelieveimg from "../assets/img/webelieve.png";


function webelieve() {
  return (
    <section className="boxe" id="webelieve">
        <Divider2 />
        <Divider2 />
        <Container>
            <Row>
                <Col md="12"><p className="dec-gray font-frak">Frog's Featerues</p></Col>
            </Row>
            <Row>
                <Col md="8"><h1>We believe in building products years ahead, paying attention to the smallest details, making them simple and easy for people</h1></Col>
                <Col md="12" className="we-img"><img className="img-fluid" src={webelieveimg}></img></Col>
            </Row>
            <Row>
              <Col md="12">
                <img className="img-fluid" src={line}></img>
              </Col>
              <Col md="12">
                <p className="font-frak">Manage funds, track your portfolio & disputes <br></br>in a simple, effective and user friendly platform.</p>
              </Col>
              <Col md="6" xs="6">
                <button type="button" className="me-2 btn-green-small">
                Desktop Demo <i class="fa-solid fa-arrow-right"></i>
                </button>
              </Col>
              <Col md="6" xs="6">
                <button type="button" className="me-2 btn-green-small">
                Mobile Demo <i class="fa-solid fa-arrow-right"></i>
                </button>
              </Col>
            </Row>
        </Container>
        <Divider2 />
    </section>
  )
}

export default webelieve