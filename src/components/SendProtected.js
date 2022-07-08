import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";


function SendProtected() {
  return (
    <>
    <Divider />
        <section id="SendProtected">
            <Container>
                <Row>
                    <div className="text-center font-neue">
                        <p>Send <span>Protected</span></p>
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