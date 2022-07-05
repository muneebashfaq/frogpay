import Meta from '../components/Meta';
import Header from '../components/Header';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // page content
  const pageTitle = 'PayFrog';
  const pageDescription = 'World-first decentralized charge-back option in the blockchain history';
  return (
    <>
      <section id="home">
        <Container className='back-div'>
          <Row>
            <div className='col-md-6 text-pix'>
              <a className='button-light text-decoration-none'>Thanks to PayFrog</a>
              <Meta title={pageTitle}/>
              <Header head={pageTitle} description={pageDescription} />
            </div>
            <div className='col-md-6'>
              <img className="img-fluid" src="./frog/froghomepage.png"></img>
            </div>
          </Row>
          <Row className="p-5">
              <div className='col-md-3'>
                <button className='button-green text-decoration-none'>Litepaper-></button>
              </div>
              <div className='col-md-3'>
                <button className='button-green text-decoration-none'>Whitepaper-></button>
              </div>
            </Row>        
        </Container>
      </section>
    </>
  )
}

export default Home;