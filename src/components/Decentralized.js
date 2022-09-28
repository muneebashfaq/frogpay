import React from 'react';
import Divider2 from "../components/Divider2";
import { Container, Row, Col } from "react-bootstrap";
import frogsword from "../assets/img/frogsword.png";
import line from "../assets/img/line-dec-black.png";



function Decentralized() {
  return (
    <section id="decentralized" className="white-back2 ">
        <Container className="boxe mt-5">
            <Row>
                <Col md="12"><p className="font-frak high">Frog's Featerues</p></Col>
            </Row>

            <Row className="img-dec-height">
                <Col md="4" xs="8"><h1>Decentralized and Protected Payments</h1></Col>
                <Col md="8" xs="12">
                  <div classname="">
                    <img className="img-fluid dec" src={frogsword}></img>
                  </div>
                </Col>
                <Divider2 />
            </Row>

            <Row>
              <Col md="12">
                <img className="img-fluid" src={line}></img>
              </Col>
              <Col md="8" xs="12" className="d-flex align-items-center">
                <p className="font-frak">Security & Decentralization toghether for the first time</p>
              </Col>
                <Col md="4" xs="12" className="text-end"><button type="button" className="me-2 btn-green ">
                  <Row className="">
                    <Col md="8" xs="8" className='text-start'>
                      SEE HOW
                    </Col>
                    <Col md="4" xs="4" className="justify-content-end">
                      <i class="fa-solid fa-arrow-right"></i>
                    </Col>
                  </Row>
              </button></Col>
            </Row>
        
        </Container>
    </section>
  )
}

export default Decentralized