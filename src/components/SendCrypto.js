import React from 'react';
import { Container, Row } from "react-bootstrap";

function SendCrypto() {
  return (
    <Container>
        <Row>
            <div className="send-distance">
                <p className="send text-center">Send <span className="text-white">Protected</span><br></br> crypto payments to strangers</p>
            </div>
        </Row>
    </Container>
  )
}

export default SendCrypto