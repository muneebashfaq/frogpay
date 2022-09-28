import { Container, Row, Col } from "react-bootstrap";
import logofooter from "../assets/img/logo-footer.png";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";
const Footer = () => {
  const year = new Date().getFullYear()
  const {changeTheme} = useContext(Theme_Context)
  const [color,setcolor] =useState("white")
  const [bgcolor,setbgcolor] =useState("black")

 
  useEffect(()=>{
  
   if(changeTheme == false){
     setcolor("black")
     setbgcolor("white")
   
 }
 if(changeTheme ==true){
   setcolor("white")
   setbgcolor("black")
   
  } },[changeTheme])
  return (
    <>
      <footer className='text-center text-capitalize'     style={{
        backgroundColor: changeTheme ? "black" : "white",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}>
        <Container >
          <Row className="footer1" >
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
                  <p className="style1"  style={{
       color:`${color}`,backgroundColor:`${bgcolor}`
      }}>Terms of Use</p>
                </div>
                <div className="col-md-4">
                  <p className="style1"  style={{
       color:`${color}`,backgroundColor:`${bgcolor}`
      }} >Privacy Policy</p>
                </div>
                <div className="col-md-3">
                  <p className="style1"  style={{
       color:`${color}`,backgroundColor:`${bgcolor}`
      }} >Careers</p>
                </div>
              </Row>
            </div>

            <Col md="6" xs="12">
              <Row className="footend"  style={{
       color:`${color}`
      }}>
                <Col md="1" xs="2"><i class="fa-brands fa-twitter subfoot"></i></Col>
                <Col md="1" xs="2"><i class="fa-brands fa-telegram subfoot"></i></Col>
                <Col md="1" xs="2"><i class="fa-brands fa-github subfoot"></i></Col>
                <Col md="1" xs="2"><i class="fa-brands fa-medium subfoot"></i></Col>
                <Col md="1" xs="2"><i class="fa-brands fa-discord subfoot"></i></Col>
                <Col md="1" xs="2"><i class="fa-brands fa-linkedin subfoot"></i></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
