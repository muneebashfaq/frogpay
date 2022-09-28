import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import './css/style.css';

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useContext, useEffect, useState } from "react";
import { Theme_Context } from "./components/context/Theme.Context";
import {Helmet} from 'react-helmet'
const App = () => {
 const {changeTheme} = useContext(Theme_Context)
 const [color,setcolor] =useState("black")


  return (
    <Layout >
        <Helmet>
    <style>{`body { background-color: ${changeTheme ? "black" : "white"};transition: all .5s ease;
        Webkit-transition: all .5s ease;
        Moz-transition: all .5s ease}`}</style>
  </Helmet>
      <Container
      style={{
        backgroundColor: changeTheme ? "black" : "white",
        transition: "all .5s ease",
        WebkitTransition: "all .5s ease",
        MozTransition: "all .5s ease"
      }}
>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
