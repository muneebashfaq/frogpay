import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider3 from "../components/Divider3";
import certik from "../assets/img/certik-logo.png";
import auditedfrog from "../assets/img/auditet-frog.png";

function Audited() {
  return (
    <section id="audited">
        <Container>
            <Row>
                <Col md="12">
                    <h1 className='text-center'>Audited by</h1>
                </Col>
            </Row>
            <Divider3 />
            <Row className="row-sp">
                <Col md="3" className="card-aud-cert">
                    <Row>
                        <Col md="12">
                            <img className="img-fluid" src={certik}></img>
                        </Col>
                    <Divider3 />
                        <Col md="12" className="justify-content-end d-flex"><p>Check on GitHub <i class="fa-solid fa-arrow-right"></i></p></Col>
                    </Row>
                </Col>

                <Col md="3" className="card-aud-cert-black">
                    <Row>
                        <Col md="12">
                            <img className="img-fluid" src={auditedfrog}></img>
                        </Col>
                    <Divider3 />
                        <Col className="col-md-12 justify-content-end d-flex"><p>Coming soon</p></Col>
                    </Row>
                </Col>

                <Col md="3" className="card-aud-cert-black">
                    <Row>
                        <Col md="12">
                            <img className="img-fluid" src={auditedfrog}></img>
                        </Col>
                    <Divider3 />
                        <Col className="col-md-12 justify-content-end d-flex"><p>Coming soon</p></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Audited