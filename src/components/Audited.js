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
                <div className="col-md-12">
                    <h1 className='text-center'>Audited by</h1>
                </div>
            </Row>
            <Divider3 />
            <Row className="row-sp">
                <div className="col-md-3 card-aud-cert">
                    <Row>
                        <div className="col-md-12">
                            <img className="img-fluid" src={certik}></img>
                        </div>
                    <Divider3 />
                        <div className="col-md-12 justify-content-end d-flex"><p>Check on GitHub <i class="fa-solid fa-arrow-right"></i></p></div>
                    </Row>
                </div>

                <div className="col-md-3 card-aud-cert-black">
                    <Row>
                        <div className="col-md-12">
                            <img className="img-fluid" src={auditedfrog}></img>
                        </div>
                    <Divider3 />
                        <div className="col-md-12 justify-content-end d-flex"><p>Coming soon</p></div>
                    </Row>
                </div>

                <div className="col-md-3 card-aud-cert-black">
                    <Row>
                        <div className="col-md-12">
                            <img className="img-fluid" src={auditedfrog}></img>
                        </div>
                    <Divider3 />
                        <div className="col-md-12 justify-content-end d-flex"><p>Coming soon</p></div>
                    </Row>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Audited