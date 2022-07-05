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
            <div className='col-md-6'>
              <a className='button-light text-decoration-none'>Thanks to PayFrog</a>
              <Meta title={pageTitle}/>
              <Header head={pageTitle} description={pageDescription} />
            </div>
            <div className='col-md-6'>
              <img className="img-fluid" src="./frog/froghomepage.png"></img>
            </div>
          </Row>
          <Row>
            <div className='container'>
              <Row>
                <div classNAme="col-md-12">
                  <a className='button-green text-decoration-none'>1</a>
                </div>
                <div classNAme="col-md-12">
                  <a className='button-green text-decoration-none'>2</a>
                </div>
              </Row>
            </div>
          </Row>        
        </Container>
      </section>
    </>
  )
}

export default Home;