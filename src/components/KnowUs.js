import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import frogpay3min from "../assets/img/next-gen-frog.png";
import line from "../assets/img/line-dec-low.png";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";

function KnowUs() {
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
    <section className="white-back2" id="knowus">
        <Container>
            <Row>
                <Col md="7">
                <a className="font-frak alto">Know FrogPay in 3 min</a>
                    <p className="main mt-4" style={{color:`${color}`}}  >FrogPay is a next-gen dAPP</p>
                    <div className="divider-border"></div>
                    <Divider2 />
                    <Divider2 />
                    <Col id="first">
                    <img src={line} className="img-fluid " ></img>
                    </Col>
                    <Col id="second">
                    <p className="less font-frak low" style={{color:`${color}`}} >FrogPay is a next-gen dAPP that allows strangers to receive and send crypto payments with the confidence of never being scammed. All this and much more thanks to JDM Sistem "Jury Dispute Management"</p>
                    </Col>
                </Col>
                <Col md="5" className="text-center">
                    <a className="btn-whitelight font-frak">Play video</a>
                    <img src={frogpay3min} className="img-fluid "></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
export default KnowUs