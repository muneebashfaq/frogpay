import React from 'react';
import Divider2 from "../components/Divider2";
import { Container, Row, Col } from "react-bootstrap";
import line from "../assets/img/line-dec.png";
import webelieveimg from "../assets/img/webelieve.png";


function webelieve() {
  return (
    <section className="boxe" id="webelieve">
        <Divider2 />
        <Divider2 />
        <Container>
            <Row>
                <div className="col-md-12"><p className="dec-gray font-frak">Frog's Featerues</p></div>
            </Row>
            <Row>
                <div className="col-md-8"><h1>We believe in building products years ahead, paying attention to the smallest details, making them simple and easy for people</h1></div>
                <div className="col-md-12 we-img"><img className="img-fluid" src={webelieveimg}></img></div>
            </Row>
            <Row>
              <div className="col-md-12">
                <img className="img-fluid" src={line}></img>
              </div>
              <div className="col-md-5">
                <p className="font-frak">Manage funds, track your portfolio & disputes <br></br>in a simple, effective and user friendly platform.</p>
              </div>
              <div className="">
                <button type="button" className="me-2 btn-green-small">
                Desktop Demo <i class="fa-solid fa-arrow-right"></i>
                </button>
                <button type="button" className="me-2 btn-green-small">
                Mobile Demo <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Row>
        </Container>
        <Divider2 />
    </section>
  )
}

export default webelieve