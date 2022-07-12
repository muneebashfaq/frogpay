import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Divider from "../components/Divider";


function SendProtected() {
  return (
    <>
    <Divider />
        <section id="SendProtected">
            <Container>
                <Row>
                    <div className="typewriter text-center font-neue">
                        <p>Send
                            <span> dawad
                            </span>
                        </p>
                        <p>crypto payments to strangers</p>
                    </div>
                </Row>
            </Container>
        </section>
    <Divider />
    </>
  )
}

export default SendProtected