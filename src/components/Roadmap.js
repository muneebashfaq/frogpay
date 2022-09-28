import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import eggs1 from "../assets/img/roadmap/egg.png";
import embryo from "../assets/img/roadmap/embryo.png";
import tadpole from "../assets/img/roadmap/tadpole.png";
import tadpole2 from "../assets/img/roadmap/tadpole2.png";
import tadpole4 from "../assets/img/roadmap/tadpole4.png";
import frog from "../assets/img/roadmap/frog.png";
import adultfrog from "../assets/img/roadmap/adultfrog.png";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";





function Roadmap() {
  const {changeTheme} = useContext(Theme_Context)
  const [color,setcolor] =useState("white")
 
  useEffect(()=>{
  
   if(changeTheme == false){
     setcolor("black")
   
 }
 if(changeTheme ==true){
   setcolor("white")
   
  } },[changeTheme])
  return (
    <section id="roadmap" className="white-back2" >
      <Row>
        <Tabs
          defaultActiveKey="q12022"
          id="fill-tab-example"
          className="justify-content-center mb-5">

          <Tab eventKey="q12022" style={{color:`${color}`}}  className="nav-tabs" title="Q1 | 2022">
            <Row className="nonce">
              <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 1 - EGGS</p>
                  </Col> 
                  <Col md="2" className="text-center"><img src={eggs1} className="img-fluid "/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="3" className="card-text text-center"><p>Establishing 3 year plan & vision</p></Col>
                  <Col md="2" className="card-text text-center"><p>Core team formation</p></Col>
                  <Col md="4" className="card-text text-center"><p>R&D confirming the feasibility of the project</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 1 - EGGS</p>
                  </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={eggs1} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>Establishing 3 year plan & vision</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>Core team formation</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>R&D confirming the feasibility of the project</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="q22022" title="Q2 | 2022" >
            <Row className="nonce">
              <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 2 - EMBRYO</p>
                  </Col>
                  <Col md="2" className="text-center"><img src={embryo} className="img.fluid"/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="2" className="card-text text-center"><p>Whitepaper release</p></Col>
                  <Col md="2" className="card-text text-center"><p>Strategic advisors</p></Col>
                  <Col md="4" className="card-text text-center"><p>Creating smart contract architecture</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 2 - EMBRYO</p>
                  </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={embryo} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>Whitepaper release</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>Strategic advisors</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>Creating smart contract architecture</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="q32022" title="Q3 | 2022">
            <Row className="nonce">
              <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 3 - TADPOLE</p>
                  </Col>
                  <Col md="2" className="text-center"><img src={tadpole} className="img.fluid"/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="2" className="card-text text-center"><p>Seed investment round</p></Col>
                  <Col md="3" className="card-text text-center"><p>Launch TraderJoe & SushiSwap</p></Col>
                  <Col md="2" className="card-text text-center"><p>Website V1</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 3 - TADPOLE</p>
                  </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={tadpole} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>Seed investment round</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>Launch TraderJoe & SushiSwap</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>Website V1</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="q42022" title="Q4 | 2022">
            <Row className="nonce">
              <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 4 - TADPOLE 2 LEGS</p>
                  </Col>
                  <Col md="2" className="text-center"><img src={tadpole2} className="img.fluid"/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="3" className="card-text text-center"><p>Huge marketing to increase users</p></Col>
                  <Col md="4" className="card-text text-center"><p>BETA release on Avalanche w/ MetaMask</p></Col>
                  <Col md="2" className="card-text text-center"><p>Expanding Team</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 4 - TADPOLE 2 LEGS</p>
                  </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={tadpole2} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>Huge marketing to increase users</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>BETA release on Avalanche w/ MetaMask</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>Expanding Team</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="q12023" title="Q1 | 2023">
            <Row className="nonce">
              <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 5 - TADPOLE 4 LEGS</p>
                  </Col>
                  <Col md="2" className="text-center"><img src={tadpole4} className="img-fluid"/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="4" className="card-text text-center"><p>Avalanche network development final release</p></Col>
                  <Col md="3" className="card-text text-center"><p>Main wallets integration</p></Col>
                  <Col md="4" className="card-text text-center"><p>Publish a 10 year plan to scale to 50 MLN users</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 5 - TADPOLE 4 LEGS</p>
                  </Col> 
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={tadpole4} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>Avalanche network development final release</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>Main wallets integration</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>Publish a 10 year plan to scale to 50 MLN users</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="q22023" title="Q2 | 2023">
            <Row className="nonce">
            <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 6 - FROG</p>
                  </Col>
                  <Col md="2" className="text-center"><img src={frog} className="img-fluid"/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="4" className="card-text text-center"><p>MATIC network development final release</p></Col>
                  <Col md="3" className="card-text text-center"><p>Develop Chain bridging system</p></Col>
                  <Col md="3" className="card-text text-center"><p>App release for IOS & Android</p></Col>
                </Row>
              </Col>

            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 6 - FROG</p>
                  </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={frog} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>MATIC network development final release</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>Develop Chain bridging system</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>App release for IOS & Android</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="q32023" title="Q3 | 2023">
            <Row className="nonce">
              <Col md="12">
                <Row className="justify-content-center margin-frog">
                  <Col md="2">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 7 - ADULT FROG</p>
                  </Col>
                  <Col md="2" className="text-center"><img src={adultfrog} className="img-fluid"/></Col>
                </Row>
                <Row className="justify-content-center mb-5">
                  <Col md="4" className="card-text text-center"><p>Research and development on other Chains</p></Col>
                  <Col md="3" className="card-text text-center"><p>Introduce Cashback System</p></Col>
                  <Col md="3" className="card-text text-center"><p>Publish 2023 roadmap</p></Col>
                </Row>
              </Col>
            </Row>
            <Row className="noncexl">
              <Col md="12">
                <Row className="justify-content-center">
                  <Col md="4"></Col>
                  <Col md="2" className="right mb-5">
                    <h1 style={{color:`${color}`}}>Roadmap</h1>
                    <p className="lowtext" style={{color:`${color}`}}>Phase 7 - ADULT FROG</p>
                  </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                  <Col md="6" xs="4" className="right"><img src={adultfrog} className="img-fluid"/></Col>

                  
                  <Col xs="6">
                    <Row>
                      <Col md="4" xs="12"className="card-text text-center"><p>Research and development on other Chains.</p>
                      </Col>
                      <Col md="3" xs="12"className="card-text text-center"><p>Introduce Cashback System</p></Col>
                      <Col md="2" xs="12" className="card-text text-center"><p>Publish 2023 roadmap</p></Col>
                    </Row>
                  </Col>

                </Row>
              </Col>
            </Row>
          </Tab>

        </Tabs>
      </Row>
    </section>


  )
}

export default Roadmap;