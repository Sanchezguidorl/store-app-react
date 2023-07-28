import CarouselComponent from "./layouts/CarouselComponent";
import Header from "./layouts/Header";
import Products from "./layouts/Products";
import { Container } from "react-bootstrap";

function Body() {

  return (
    <>
      <Header />
      <Container>
        <CarouselComponent />
        <div className="d-flex align-items-center py-3 my-4">
          <h2 className="position-absolute start-50 translate-middle-x p-1 bg-white">
            Destacados
          </h2>
          <hr className="w-100 opacity-100 fw-light" />
        </div>
        <Products/>
      </Container>
    </>
  );
}

export default Body;
