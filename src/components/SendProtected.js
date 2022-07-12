import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Divider from "../components/Divider";




function SendProtected() {    
  return (
    <>
    <Divider />
        <section id="SendProtected">
            <Container>
                <Row>
                    <Col className="typewriter text-center font-neue">
                    <p>Send 
                        <Typewriter
                            words={[' Protected', ' Protected', ' Frog', ' Protected']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={170}
                            deleteSpeed={80}
                            delaySpeed={1000}
                            />
                            <br></br>
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