import React from 'react';
import Divider from "../components/Divider";
import Homepage from "../components/Homepage";
import SendProtected from "../components/SendProtected";
import KnowUs from "../components/KnowUs";
import Decentralized from "../components/Decentralized";
import FrogAToB from "../components/FrogAToB";
import Jdm from "../components/Jdm";
import Webelieve from "../components/Webelieve";
import Roadmap from "../components/Roadmap";
import Audited from "../components/Audited";

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
    <Jdm />
    <Webelieve />
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