import React from 'react';
import Divider from "../components/Divider";
import { Container, Row, Col } from "react-bootstrap";


function Decentralized() {
  return (
    <section className="boxe card-boxe" id="decentralized">
        <Divider />
        <Container>
            <Row>
                <div className="col-md-12"><p className="dec-gray font-frak">Frog's Featerues</p></div>
            </Row>
            <Row>
                <div className="col-md-6"><h1>Decentralized and Protected Payments</h1></div>
                <div className="col-md-6"><img className="img-fluid" src=".\img\frogsword.png"></img></div>
            </Row>
            <Row>
              <div className="col-md-12">
                <img className="img-fluid" src=".\img\line-dec.png"></img>
              </div>
              <div className="col-md-12">
                <p className="font-frak">Security & Decentralization toghether for the first time</p>
              </div>
            </Row>
        </Container>
    </section>
  )
}

export default Decentralized