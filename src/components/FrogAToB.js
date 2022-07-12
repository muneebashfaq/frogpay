import React from 'react';
import Divider from "../components/Divider";
import { Container, Row, Col } from "react-bootstrap";
import frogatobimg from "../assets/img/payment/frogatob1.png";


function frogatob() {
  return (
    <section className="boxe" id="frogatob">
        <Divider />
        <Container>
            <Row className="text-center">
                <Col md="12">
                    <h4>Frog A send a protected payment<br></br> to Frog B throught FrogPay dAPP</h4>
                    <p className="frogatob">See full scheme</p>
                </Col>
            </Row>
            <Row className="text-center">
                <Col className="col-md-12 marginfrog">
                    <img className="img-fluid" src={frogatobimg}></img>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md="12">
                    <button type="button" className="me-2">then <i class="fa-solid fa-arrow-right"></i></button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default frogatob