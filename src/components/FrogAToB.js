import React from 'react';
import Divider from "../components/Divider";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/img/slider/1.png";
import slider2 from "../assets/img/slider/2.png";
import slider3 from "../assets/img/slider/3.png";
import slider5 from "../assets/img/slider/5.png";
import slider6 from "../assets/img/slider/6.png";
import slider7 from "../assets/img/slider/7.png";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./context/Theme.Context";



function Frogatob() {
    const {changeTheme} = useContext(Theme_Context)
    const [color,setcolor] =useState("white")
    const [bbutton,setbutton] =useState("btn-nav-how")

   
    useEffect(()=>{
    
     if(changeTheme == false){
       setcolor("black")
       setbutton("btn-nav-how2")
   }
   if(changeTheme ==true){
     setcolor("white")
     setbutton("btn-nav-how")
    } },[changeTheme])
  return (
    <section id="frogatob"   >

        <div id="myCarousel" class="padding-black carousel slide carousel-height" data-ride="carousel" data-interval="false">

            {/* <!-- Wrapper for slides --> */}
            <div class="carousel-inner" role="listbox">

            <div class="row item active">
                <Col md="12" className="high-img">
                    <img src={slider1} alt="Chania"/>
                </Col>
                <div class="row carousel-caption">
                    <Col md="12">
                        <p className="features" style={{color:`${color}`}} >Frog's Featerues</p>
                    </Col>
                    <Col md="12" className="nonce">
                        <h1 style={{color:`${color}`}}  >How it Works</h1>
                    </Col>
                    <Col md="12" className="noncexl">
                        <h1 style={{color:`${color}`}}  >Frog A send a protected payment to Frog B throught FrogPay dAPP</h1>
                    </Col>
                    <Col md="12">
                        <p className="scheme"  style={{color:`${color}`}}>See full scheme</p>
                    </Col>
                </div>
                <div class="row carousel-caption low">
                    <Col md="12">
                        <p className="low-green nonce"  style={{color:`${color}`}}>Frog A send a protected payment to Frog B<br></br> throught FrogPay dAPP</p>               
                    </Col>
                    <Col md="12">
                        <button href="#myCarousel" role="button" data-slide="next" className={bbutton}>then<i class="fa-solid fa-arrow-right"></i></button>
                    </Col>
                </div>
            </div>

            <div class="row item">
                <Col md="12" className="high-img">
                    <img src={slider2} alt="Chania"/>
                </Col>
                <div class="row carousel-caption">
                    <Col md="12">
                        <p className="features"  style={{color:`${color}`}}>Frog's Featerues</p>
                    </Col>
                    <Col md="12">
                        <h1  style={{color:`${color}`}}>Money go to dapp wallet and locked</h1>
                    </Col>
                    <Col md="12">
                        <p  style={{color:`${color}`}}>See full scheme</p>
                    </Col>
                </div>
                <div class="row carousel-caption low">
                    <Col md="6" xs="12" className="text-end">
                        <button href="#myCarousel" role="button" data-slide="next" className={bbutton}  style={{color:`${color}`}} >Timelock is Over<i class="fa-solid fa-arrow-right"></i></button>                
                    </Col>
                    <Col md="6" xs="12" className="text-start">
                        <button href="#myCarousel" role="button" data-slide-to="4" className={bbutton}  style={{color:`${color}`}}>Frog A is Satisfied<i class="fa-solid fa-arrow-right"></i></button>
                    </Col>
                </div>
            </div>
            
            <div class="row item">
                <Col md="12">
                    <img src={slider3} alt="Flower"/>
                </Col>
                <div class=" row carousel-caption">
                    <Col md="12">
                        <p className="features" style={{color:`${color}`}}>Frog's Featerues</p>
                    </Col>
                    <Col md="12" className="text-center">
                        <h1 style={{color:`${color}`}}>Frog A unsatisfied and ask for chargeback</h1>
                    </Col>
                    <Col md="12" className="text-center">
                        <p style={{color:`${color}`}}>See full scheme</p>
                    </Col>
                </div>
                <div class="row carousel-caption low">
                    <Col md="12">
                        <button href="#myCarousel" role="button" data-slide="next" className={bbutton}>FrogPay Communicate with<i class="fa-solid fa-arrow-right"></i></button>                
                    </Col>
                </div>
            </div>

            <div class="row item">
                <Col md="12">
                    <img src={slider5} alt="Flower"/>
                </Col>
                <div class="row carousel-caption">
                    <Col md="12">
                        <p className="features" style={{color:`${color}`}}>Frog's Featerues</p>
                    </Col>
                    <Col md="12">
                        <h1 style={{color:`${color}`}}>FrogPay communicate with dispute contract that ask random JDM judje request.</h1>
                    </Col>
                    <Col md="12">
                        <p style={{color:`${color}`}}>See full scheme</p>
                    </Col>
                </div>
                <div class="row carousel-caption low">
                    <Col md="12">
                        <p className="low-green" style={{color:`${color}`}}>Frog A&B need to fill up more data <br className="noncexl"></br>or send more proof</p>
                    </Col>
                    <Col md="6" className="text-end">
                        <button href="#myCarousel" role="button" data-slide="next" className={bbutton}>Request is Approved<i class="fa-solid fa-arrow-right"></i></button>    
                    </Col>
                    <Col md="6" className="text-start">
                        <button href="#myCarousel" role="button" data-slide-to="5" className={bbutton}>Request isn't Approved<i class="fa-solid fa-arrow-right"></i></button>             
                    </Col>
                </div>
            </div>

            <div class="row item">
                <Col md="12">
                    <img src={slider6} alt="Flower"/>
                </Col>
                <div class="row carousel-caption">
                    <Col md="12">
                        <p className="features" style={{color:`${color}`}}>Frog's Featerues</p>
                    </Col>
                    <Col md="12">
                        <h1 style={{color:`${color}`}}>Frog A receive payment</h1>
                    </Col>
                    <Col md="12">
                        <p style={{color:`${color}`}}>See full scheme</p>
                    </Col>
                </div>
                <div class="row carousel-caption low">
                    <Col md="6" className="text-end">
                        <button href="#myCarousel" role="button" data-slide="prev" className={bbutton}><i class="fa-solid fa-arrow-left"></i>Go to Previous Step</button>    
                    </Col>
                    <Col md="6" className="text-start">
                        <button href="#myCarousel" role="button" data-slide-to="0" className="btn-nav-how-green">Start Again<i class="fa-solid fa-arrow-rotate-right"></i></button>             
                    </Col>
                </div>
            </div>

            <div class="row item">
                <Col md="12">
                    <img src={slider7} alt="Flower"/>
                </Col>
                <div class="row carousel-caption">
                    <Col md="12">
                        <p className="features" style={{color:`${color}`}}>Frog's Featerues</p>
                    </Col>
                    <Col md="12">
                        <h1 style={{color:`${color}`}}>Frog B receive payment</h1>
                    </Col>
                    <Col md="12">
                        <p style={{color:`${color}`}}>See full scheme</p>
                    </Col>
                </div>
                <div class="row carousel-caption low">
                    <Col md="6" className="text-end">
                        <button href="#myCarousel" role="button" data-slide="prev" className={bbutton}><i class="fa-solid fa-arrow-left"></i> Go to Previous Step</button>    
                    </Col>
                    <Col md="6" className="text-start">
                        <button href="#myCarousel" role="button" data-slide-to="0" className="btn-nav-how-green">Start Again<i class="fa-solid fa-arrow-rotate-right"></i></button>             
                    </Col>
                </div>
            </div>
        
            </div>

            {/* <!-- Left and right controls --> */}
            <a class="left carousel-control" style={{color:`${color}`}}  href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only" >Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" style={{color:`${color}`}}  role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only" style={{color:`${color}`}}>Next</span>
            </a>

            {/* <!-- Indicators --> */}
            <Col  style={{color:"black"}}>
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                </ol>
            </Col>
        </div>
    </section>
  )
}

export default Frogatob