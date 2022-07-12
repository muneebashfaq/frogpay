import Meta from '../components/Meta';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import FrogHomeImg from "../assets/img/froghome.png";

const Home = () => {
  // page content
  const pageTitle = 'FrogPay';
  return (
    <>
    <section id="home">
      <Meta title={pageTitle}/>
      <Container className="white-back">
        <Row>
          <Col md="7" xs="12">
            <a className="btn-greenlight font-frak">Thanks to PayFrog</a>
            <p className="mt-4">World-first decentralized<br></br>charge-back option<br></br>in the blockchain history</p>
            <Divider />
          </Col>
          <Col md="5" xs="12">
            <img src={FrogHomeImg} className="img-fluid froggin2"></img>
          </Col>
          <div className="col col-lg-5 col-sm-12">
          </div>
        </Row>
        <Row>
          <Col  md="12" xs="12" className="mb-5">
              <button type="button" className="me-2 btn-green">
                  Litepaper <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button type="button" className="me-2 btn-green">
                Whitepaper <i class="fa-solid fa-arrow-right"></i>
              </button>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default Home;