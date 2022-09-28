import Meta from '../components/Meta';
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../components/Divider";
import FrogPay3D from "../assets/js/frogpay.gltf";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";
const Home = () => {
  const {changeTheme} = useContext(Theme_Context)
 const [color,setcolor] =useState("white")

 useEffect(()=>{
     
  if(changeTheme == false){
    setcolor("black")
}
if(changeTheme ==true){
  setcolor("white")
 } },[changeTheme])
  const pageTitle = 'FrogPay';
  return (
    <>
    <section id="home" className='mt-5'>
      <Meta title={pageTitle} />
      <Container className="white-back" >
        <Row className="justify-content-center" >
          <Col md="3" sm="12" className="">
            <model-viewer  src={FrogPay3D} alt="Frogpay3D" shadow-intensity="1" camera-controls auto-rotate ar >
            </model-viewer>
          </Col>
        </Row>
        <Row>
          <Col md="4" sm="12" className="text-center" >
            <a className="btn-greenlight font-frak" >Thanks to Frogpay</a>
          </Col>
          <Col md="12" sm="12" className="text-center" >
          <p className="mt-4"   style={{
        color: changeTheme ? "white" : "black",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}>World-first decentralized charge-back option <br></br> in the blockchain history</p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col  md="2" xs="6" className="text-center">
              <button type="button" className="me-2 btn-green">
                  LITEPAPER
              </button>
          </Col>
          <Col md="2" xs="6" className="text-center">
              <button type="button" className="me-2 btn-green">
                PITCHDECK
              </button>
          </Col>
        </Row>
      </Container>
      </section>
    </>
  )
}

export default Home;