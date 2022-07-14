import Meta from '../components/Meta';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import FrogHomeImg from "../assets/img/froghome.png";

const Home = () => {
  // page content
  const pageTitle = 'FrogPay';
  return (
    <>
    <section id="home" className='mt-5'>
      <Meta title={pageTitle}/>
      <Container className="white-back">
        <Row>
          <Col md="12" xs="12" className="text-center">
            <img src={FrogHomeImg} className="img-fluid froggin2"></img>
          </Col>
          <Col md="2" xs="12" className="text-center">
            <a className="btn-greenlight font-frak">Thanks to PayFrog</a>
          </Col>
          <Col md="12" xs="12" className="text-center">
          <p className="mt-4">World-first decentralized charge-back option <br></br> in the blockchain history</p>
          </Col>
          <div className="col col-lg-5 col-sm-12">
          </div>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col  md="2" xs="6" className="text-center">
              <button type="button" className="me-2 btn-green">
                  LITEPAPER
              </button>
          </Col>
          <Col md="2" xs="6" className="text-center">
              <button type="button" className="me-2 btn-green">
                WHITEPAPER
              </button>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default Home;