import React from 'react';
import Divider3 from "../components/Divider3";
import { Container, Row, Col } from "react-bootstrap";


function Jdm() {
  return (
    <section className="boxe" id="jdm">
        <Container>
            <Row className="jdm-img">
                <div className="col-md-12 jdm-margin text-center"><h7>Play video and know more about our dispute system</h7>
                <h1>JDM & Judge to earn</h1></div>
            </Row>
            <Row>
                <div className="col-md-6">
                    <p className="less">Our revolutionary Jury Dispute Management system:</p>
                    <ol>
                        <li className="less">Fair & Decentralised</li>
                        <li className="less">Anonimous votes</li>
                        <li className="less">Earn rewards by Judge individual <br></br> transaction</li>
                    </ol>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Jdm