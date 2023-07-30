import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarouselComponent from "./layouts/CarouselComponent";
import Divider from "./layouts/Divider";
import Header from "./layouts/Header";
import Products from "./layouts/Products";
import { Col, Container, Row } from "react-bootstrap";
import { faLock, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import Footer from "./layouts/Footer";

function Body() {

  return (
    <>
      <Header />
      <Container>
        <CarouselComponent />
        <Divider text={'Featured'} />
        <Products />
<Divider text={'Advantages'} />
<section className="text-center">
  <Row className="justify-content-center my-3">
<Col className="my-3" xs={12} md={6} lg={4}>
<FontAwesomeIcon className="fs-1 my-4" icon={faTruckFast} flip="horizontal" size="xs" style={{color: "#8db8b7",}} />
<h4> WE SHIP YOUR PURCHASE</h4>
    <p>Deliveries to all the country</p>
</Col>
<Col className="my-3" xs={12} md={6} lg={4}>
<FontAwesomeIcon className="fs-1 my-4" icon={faCreditCard} size="xs" style={{color: "#8db8b7",}} />
<h4>PAY AS YOU WISH</h4>
    <p>Credit cards or cash</p>
</Col>
<Col className="my-3" xs={12} md={6} lg={4}>
<FontAwesomeIcon className="fs-1 my-4" icon={faLock} style={{color: "#8db8b7",}} /><h4> SHOP SAFELY</h4>
    <p>Your data always protected</p>
</Col>
  </Row>
</section>
      </Container>
      <Footer/>
    </>
  );
}

export default Body;
