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
          <div className="col-md-7 col-xs-12">
            <a className="btn-greenlight font-frak">Thanks to PayFrog</a>
            <p className="mt-4">World-first decentralized<br></br>charge-back option<br></br>in the blockchain history</p>
            <Divider />
          </div>
          <div className="col-md-5">
            <img src={FrogHomeImg} className="img-fluid froggin2"></img>
          </div>
        </Row>
        <Row>
          <div className="col-md-12 mb-5">
              <button type="button" className="me-2 btn-green">
                  Litepaper <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button type="button" className="me-2 btn-green">
                Whitepaper <i class="fa-solid fa-arrow-right"></i>
              </button>
          </div>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default Home;