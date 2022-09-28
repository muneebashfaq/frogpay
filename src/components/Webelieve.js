import React from 'react';
import Divider2 from "../components/Divider2";
import { Container, Row, Col } from "react-bootstrap";
import line from "../assets/img/line-dec-low.png";
import Dropdown from 'react-bootstrap/Dropdown';
import webelieveimg from "../assets/img/webelieve.png";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";




function Webelieve() {
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
    <section className="white-back2 text-center-reponsive justify-content-center mb-5" id="webelieve">
        <Divider2 />
        <Divider2 />
        <Container className="justify-content-center">
            <Row>
                <Col md="12"><p className="dec-gray font-frak" style={{color:`${color}`}} >Frog Pay Featerues</p></Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="12"><h1 style={{color:`${color}`}}>We believe in building products years ahead, paying attention to the smallest details, making them simple and easy for people</h1></Col>
                <Col md="4">
                  <p className="font-frak lowtext" >Manage funds, track your portfolio & disputes in a simple, effective and user friendly platform.</p>
                </Col>
                <Col md="4" className="we-img justify-content-center mb-5 mt-5"><img className="img-fluid" src={webelieveimg}></img></Col>
                <Col className="noncexl">
                  <img src={line} className="img-fluid" ></img>
                </Col>

            </Row>
            <Row className="justify-content-center">
              <Col md="6" xs="6" className="text-end">
                <button type="button" className="me-2 btn-greenweb">
                DESKTOP DEMO <i class="noncexl fa-solid fa-arrow-right"></i></button>
              </Col>
              <Col md="6" xs="6" className="text-start">
                <button type="button" className="me-2 btn-greenweb">
                MOBILE DEMO <i class="noncexl fa-solid fa-arrow-right"></i></button>
              </Col>
            </Row>
        </Container>
        <Divider2 />
    </section>
  )
}

export default Webelieve