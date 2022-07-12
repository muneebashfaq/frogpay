import { Container, Row, Col } from "react-bootstrap";
import logofooter from "../assets/img/logo-footer.png";

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
        <Container>
          <Row className="footer1">
            <div className="col-md-2 font-cyg"><a className="style3 footcenter"><img class="img-fluid logofoot" src={logofooter}></img></a></div>
            <div className="col-md-1"><a className="style2 footcenter">Litepaper</a></div>
            <div className="col-md-2"><a className="style2 footcenter">Whitepaper</a></div>
            <div className="col-md-1"><a className="style2 footcenter">Pitchdeck</a></div>
            <div className="col-md-6 footend"><a className="font-frak style1">Go to Test Demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </Row>
        </Container>
        {/* sub footer */}
        <Container>
          <Row className="footer2">
            <div className="col-md-6">
              <Row>
                <div className="col-md-3">
                  <p className="style1">Terms of Use</p>
                </div>
                <div className="col-md-4">
                  <p className="style1">Privacy Policy</p>
                </div>
                <div className="col-md-3">
                  <p className="style1">Careers</p>
                </div>
              </Row>
            </div>

            <div className="col-md-6 ">
              <Row className="footend">
                <div className="col-md-1"><i class="fa-brands fa-twitter subfoot"></i></div>
                <div className="col-md-1"><i class="fa-brands fa-telegram subfoot"></i></div>
                <div className="col-md-1"><i class="fa-brands fa-github subfoot"></i></div>
                <div className="col-md-1"><i class="fa-brands fa-medium subfoot"></i></div>
                <div className="col-md-1"><i class="fa-brands fa-discord subfoot"></i></div>
                <div className="col-md-1"><i class="fa-brands fa-linkedin subfoot"></i></div>
              </Row>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
