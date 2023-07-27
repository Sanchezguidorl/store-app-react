import { useContext } from "react";
import CardComponent from "./CardComponent";
import { ShoesContext } from "../contexts/ShoesContextProvider";
import { Col, Row } from "react-bootstrap";

function Products() {
  const { shoes } = useContext(ShoesContext);

  return (

    <Row className="g-2 justify-content-center">
      {shoes && shoes.map((shoe) =>
      <Col key={shoe.id} xs={12} sm={6} md={4} lg={3} className="p-0  d-flex justify-content-center">
      <CardComponent product={shoe} />
      </Col>
      )}
    </Row>
  );
}

export default Products;
