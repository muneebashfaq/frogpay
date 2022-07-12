import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import frogpay3min from "../assets/img/frogpay3min.png";


function KnowUs() {
  return (
    <section className="white-back2" id="knowus">
        <Container>
            <Row className="border-know">
                <div className="col-md-4">
                    <a className="btn-greenmore font-frak">Know more about PayFrog</a>
                    <p className="main mt-4">Know FrogPay<br></br> in 3 min</p>
                    <Divider />
                    <Divider />
                    <Divider2 />
                    <div className="divider-border"></div>
                    <p className="less">Our revolutionary Jury Dispute<br></br> Management system:</p>
                    <ol>
                        <li className="less">Fair & Decentralised</li>
                        <li className="less">Anonimous votes</li>
                        <li className="less">Earn rewards by Judge individual transaction</li>
                    </ol>
                </div>
                <div className="col-md-8 text-center img-center">
                    <img src={frogpay3min} className="img-fluid "></img>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default KnowUs