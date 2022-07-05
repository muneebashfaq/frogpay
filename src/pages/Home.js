import Meta from '../components/Meta';
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  // page content
  const pageTitle = 'Home';
  const pageDescription = 'World-first decentralized charge-back option in the blockchain history';
  return (
    <>
      <Container>
        <Meta title={pageTitle}/>
        <Header head={pageTitle} description={pageDescription} />
      </Container>
    </>
  )
}

export default Home;