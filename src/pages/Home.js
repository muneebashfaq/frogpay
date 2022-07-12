import React from 'react';
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import Homepage from "../components/Homepage";
import SendProtected from "../components/SendProtected";
import KnowUs from "../components/KnowUs";
import Decentralized from "../components/Decentralized";
import FrogAToB from "../components/FrogAToB";
import Jdm from "../components/Jdm";
import Webelieve from "../components/Webelieve";
import Roadmap from "../components/Roadmap";
import Audited from "../components/Audited";
import Test from "../components/test";

const Home = () => {
  // page content
  const pageTitle = 'FrogPay';
  return (
    <>
      <Divider2 />

    <Homepage />
    <SendProtected />
    <KnowUs />

      <Divider />

    <Decentralized />
    {/* <Test /> */}
    <FrogAToB />
    <Jdm />
    <Webelieve />
    
      <Divider />

    <Roadmap />

      <Divider />
      <Divider />

    <Audited />
    
      <Divider />
      <Divider />
    </>
  )
}

export default Home;