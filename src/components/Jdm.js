import React from 'react';
import Divider3 from "../components/Divider3";
import { Container, Row, Col } from "react-bootstrap";


function Jdm() {
  return (
    <section className="white-back2" id="jdm" >
        <Container >
            <Row className="jdm-img" >
                <Col md="12" className="jdm-margin text-center" style={{color:"white"}}>
                  <h2>JDM & Judge to earn</h2>

                  <p>Play video and know more about our dispute system</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Jdm