import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import eggs1 from "../assets/img/roadmap/egg.png";

function Roadmap() {
  return (
    <section id="roadmap">
      <Container>
          <Row className="text-center">
              <Col md="12"><h1>Roadmap</h1></Col>
              <Col md="12"><p>Phase 1 - Eggs</p></Col>
          </Row>
          <Divider />
          <Row className="justify-content-center">
            <Col md="4" className=" text-center">
              <img className="img-fluid" src={eggs1}></img>
            </Col>
            <Col md="6">
            <Divider2 />
              <ul>
                <li>Core team formation</li>
                <li>Establishing 3 year plan & vision</li>
                <li>R&D confirming the feasibility of the project</li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="1" className="card-road">Q1 | 2022</Col>
            <Col md="1" className="card-road">Q2 | 2022</Col>
            <Col md="1" className="card-road">Q3 | 2022</Col>
            <Col md="1" className="card-road">Q4 | 2022</Col>
            <Col md="1" className="card-road">Q1 | 2023</Col>
            <Col md="1" className="card-road">Q2 | 2023</Col>
            <Col md="1" className="card-road">Q3 | 2023</Col>
          </Row>
      </Container>
    </section>
  )
}

export default Roadmap;