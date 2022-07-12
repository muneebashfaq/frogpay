import React from 'react';
import Divider3 from "../components/Divider3";
import { Container, Row, Col } from "react-bootstrap";


function Jdm() {
  return (
    <section className="boxe" id="jdm">
        <Container>
            <Row className="jdm-img">
                <Col md="12" className="jdm-margin text-center"><h7>Play video and know more about our dispute system</h7>
                <h1>JDM & Judge to earn</h1></Col>
            </Row>
            <Row>
                <Col md="6">
                    <p className="less">Our revolutionary Jury Dispute Management system:</p>
                    <ol>
                        <li className="less">Fair & Decentralised</li>
                        <li className="less">Anonimous votes</li>
                        <li className="less">Earn rewards by Judge individual <br></br> transaction</li>
                    </ol>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Jdm