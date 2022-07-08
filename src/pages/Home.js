import React from 'react';
import Divider from "../components/Divider";
import Homepage from "../components/Homepage";
import SendProtected from "../components/SendProtected";
import KnowUs from "../components/KnowUs";
import Decentralized from "../components/Decentralized";
import FrogAToB from "../components/FrogAToB";

const Home = () => {
  // page content
  const pageTitle = 'FrogPay';
  return (
    <>
    <Homepage />
    <SendProtected />
    <KnowUs />
    <Divider />
    <Decentralized />
    <FrogAToB />
    </>
  )
}

export default Home;