import React from 'react';
import Divider from "../components/Divider";
import { Container, Row, Col } from "react-bootstrap";
import frogsword from "../assets/img/frogsword.png";
import line from "../assets/img/line-dec-low-black.png";



function Decentralized() {
  return (
    <section id="decentralized">
        <Container className="boxe">
            <Row>
                <Col md="12"><p className="font-frak">Frog's Featerues</p></Col>
            </Row>
            <Row>
                <Col md="6"><h1>Decentralized and Protected Payments</h1></Col>
                <Col md="6">
                  <img className="img-fluid dec" src={frogsword}></img>
                </Col>
            </Row>
            <Row>
              <Col md="12">
                <img className="img-fluid" src={line}></img>
              </Col>
              <Col md="12">
                <p className="font-frak">Security & Decentralization toghether for the first time</p>
              </Col>
            </Row>

            <Row>
                <Col md="12"><p className="font-frak">Frog's Featerues</p></Col>
            </Row>
        </Container>
    </section>
  )
}

export default Decentralized