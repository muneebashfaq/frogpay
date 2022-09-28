import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Divider from "../components/Divider";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";



function SendProtected() {    
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
    <>
    <Divider />
        <section id="SendProtected">
            <Container >
                <Row>
                    <Divider  />
                    <Col className="typewriter text-center font-cyg" >
                    <p style={{color:`${color}`}}>Send 
                        <span style={{color:`${color}`}}>
                        <Typewriter 
                            words={[' Protected', ' Trustless', ' Decentralized']}
                            loop={99}
                            cursor cursorStyle='|'
                            typeSpeed={170}
                            deleteSpeed={80}
                            delaySpeed={1000}
                           
                            />
                            <br></br>
                            </span>
                            crypto payments to strangers</p>
                    </Col>
                </Row>
            </Container>
        </section>
    <Divider />
    </>
  )
}

export default SendProtected