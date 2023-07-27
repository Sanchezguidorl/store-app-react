import { useContext, useEffect } from "react";
import CarouselComponent from "./layouts/CarouselComponent";
import Header from "./layouts/Header";
import { ShoesContext } from "./contexts/ShoesContextProvider";
import axios from "axios";
import Products from "./layouts/Products";
import { Container } from "react-bootstrap";

function Body() {
  const { setShoes } = useContext(ShoesContext);

  useEffect(() => {
    const getShoes = async () => {
      try {
        const shoesData = await axios.get(
          "https://fakestoreapi.com/products?limit=5"
        );
        setShoes(shoesData.data);
        console.log(shoesData.data);
      } catch (error) {
        console.log(error);
      }
    };

    getShoes();
  }, []);

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
