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
              <div className="col-md-12"><h1>Roadmap</h1></div>
              <div className="col-md-12"><p>Phase 1 - Eggs</p></div>
          </Row>
          <Divider />
          <Row className="justify-content-center">
            <div className="col-md-4 text-center">
              <img className="img-fluid" src={eggs1}></img>
            </div>
            <div className="col-md-6">
            <Divider2 />
              <ul>
                <li>Core team formation</li>
                <li>Establishing 3 year plan & vision</li>
                <li>R&D confirming the feasibility of the project</li>
              </ul>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="col-md-1 card-road">Q1 | 2022</div>
            <div className="col-md-1 card-road">Q2 | 2022</div>
            <div className="col-md-1 card-road">Q3 | 2022</div>
            <div className="col-md-1 card-road">Q4 | 2022</div>
            <div className="col-md-1 card-road">Q1 | 2023</div>
            <div className="col-md-1 card-road">Q2 | 2023</div>
            <div className="col-md-1 card-road">Q3 | 2023</div>
          </Row>
      </Container>
    </section>
  )
}

export default Roadmap;