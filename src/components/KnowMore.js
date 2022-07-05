import React from 'react';
import Meta from '../components/Meta';
import Header from '../components/Header';
import { Container, Row, Col } from "react-bootstrap";


function KnowMore() {
    const pageTitle = 'PayFrog';
    const pageDescription = 'World-first decentralized charge-back option in the blockchain history';
    return (
    <Container className='back-div'>
        <Row>
            <div className='col-md-4'>
                <div className='col-md-6 text-pix'>
                <a className='button-light text-decoration-none'>Thanks to PayFrog</a>
                <Meta title={pageTitle}/>
                <Header head={pageTitle} description={pageDescription} />
                </div>
            </div>
            <div className='col-md-8'>2</div>
        </Row>
    </Container>
  )
}

export default KnowMore