import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider3 from "../components/Divider3";
import certik from "../assets/img/certik-logo.png";
import auditedfrog from "../assets/img/auditet-frog.png";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";


function Audited() {
    const {changeTheme} = useContext(Theme_Context)
    const [color,setcolor] =useState("white")
    const [bgcolor,setbgcolor] =useState("black")
   
    useEffect(()=>{
    
     if(changeTheme == false){
       setcolor("black")
       setbgcolor("white")
   }
   if(changeTheme ==true){
     setcolor("white")
     setbgcolor("")
    } },[changeTheme])
  return (
    <section id="audited">
        <Container>
            <Row>
                <Col md="12">
                    <h1 className='text-center' style={{color:`${color}`}}>Audited by</h1>
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
                        <Col md="12" className="justify-content-end d-flex" style={{color:`${color}`}}><p>Check on GitHub <i class="fa-solid fa-arrow-right"></i></p></Col>
                    </Row>
                </Col>

                <Col md="3" className="card-aud-cert-black" style={{backgroundColor:`${bgcolor}`,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <Row>
                        <Col md="12">
                            <img className="img-fluid" src={auditedfrog}></img>
                        </Col>
                    <Divider3 />
                        <Col className="col-md-12 justify-content-end d-flex"><p style={{color:`${color}`}}>Coming soon</p></Col>
                    </Row>
                </Col>

                <Col md="3" className="card-aud-cert-black" style={{backgroundColor:`${bgcolor}`,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <Row>
                        <Col md="12">
                            <img className="img-fluid" src={auditedfrog}></img>
                        </Col>
                    <Divider3 />
                        <Col className="col-md-12 justify-content-end d-flex"><p style={{color:`${color}`}}>Coming soon</p></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Audited