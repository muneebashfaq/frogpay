import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import frogpay3min from "../assets/img/next-gen-frog.png";
import line from "../assets/img/line-dec-low.png";


function KnowUs() {
  return (
    <section className="white-back2" id="knowus">
        <Container>
            <Row>
                <Col md="7">
                <a className="font-frak">Know FrogPay in 3 min</a>
                    <p className="main mt-4">FrogPay is a next-gen dAPP</p>
                    <div className="divider-border"></div>
                    <img src={line}></img>
                    <p className="less">FrogPay is a next-gen dAPP that allows strangers to receive and send crypto payments with the confidence of never being scammed. All this and much more thanks to JDM Sistem ?Jury Dispute Management?</p>
                </Col>
                <Col md="5" className="text-center">
                    <img src={frogpay3min} className="img-fluid "></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default KnowUs