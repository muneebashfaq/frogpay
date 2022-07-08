import React from 'react';
import Divider from "../components/Divider";
import { Container, Row, Col } from "react-bootstrap";


function frogatob() {
  return (
    <section className="boxe" id="frogatob">
        <Divider />
        <Container>
            <Row className="text-center">
                <div className="col-md-12">
                    <h4>Frog A send a protected payment<br></br> to Frog B throught FrogPay dAPP</h4>
                    <p className="frogatob">See full scheme</p>
                </div>
            </Row>
            <Row className="text-center">
                <div className="col-md-12 marginfrog">
                    <img className="img-fluid" src=".\img\payment\frogatob1.png"></img>
                </div>
            </Row>
            <Row className="justify-content-center">
                <div className="col-md-12">
                    <button>then <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default frogatob