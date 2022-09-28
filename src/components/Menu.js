import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton'
import "../css/style.css";
import { useContext } from "react";
import { Theme_Context } from "./context/Theme.Context";
import { useState,useEffect } from "react";



const Menu = () => {
  const {SetchangeTheme,changeTheme} = useContext(Theme_Context)
  const [color,setcolor] =useState("white")
  const [bgcolor,setbgcolor] =useState("btn-nav")

 
  const ChangeTheme=()=>{
    SetchangeTheme(!changeTheme)
   
  
  }
   
  useEffect(()=>{
  
    if(changeTheme == false){
      setcolor("black")
      setbgcolor("btn-nav2")
    
  }
  if(changeTheme ==true){
    setcolor("white")
    setbgcolor("btn-nav")
  }},[changeTheme])
  return (
      <section id="nav"   style={{
        backgroundColor: changeTheme ? "black" : "white",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#home"><img src={logo}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link className="margin-navbar padding-a-nav" href="#home" style={{color:`${color}`}}>TRAILER</Nav.Link>
              <Nav.Link className="margin-navbar padding-a-nav" href="#link" style={{color:`${color}`}}>ROADMAP</Nav.Link>
              <Nav.Link className="margin-navbar padding-a-nav" href="#link" style={{color:`${color}`}}>FEATURE</Nav.Link>
            </Nav>
            <Nav className="text-center">
              <Nav.Link href="">
              <Dropdown >
                  <Dropdown.Toggle className={bgcolor} variant="normal" id="dropdown-basic">
                    Demo
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Col>
                    <Dropdown.Item className="padding-nav text-center" href="#/action-1">DESKTOP</Dropdown.Item>
                    <Dropdown.Item className="padding-nav text-center" href="#/action-2">MOBILE</Dropdown.Item>
                    </Col>
                  </Dropdown.Menu>
                </Dropdown>  
              </Nav.Link>
              <Nav.Link href="#link" style={{
        backgroundColor: changeTheme ? "black" : "white",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}>
                <Dropdown >
                  <Dropdown.Toggle className={bgcolor} variant="normal" id="dropdown-basic">
                    Docs
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="padding-nav text-center" href="#/action-1">LITEPAPER</Dropdown.Item>
                    <Dropdown.Item className="padding-nav text-center" href="#/action-2">PITCHDECK</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
              <Nav.Link href="#link" style={{
        backgroundColor: changeTheme ? "black" : "white",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}>
              <label class="switch">
  <input type="checkbox" onClick={ChangeTheme}/>
  <span class="slider round"></span>
</label>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>


  );
};


export default Menu;
