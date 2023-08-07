import { Col, Container, Row } from "react-bootstrap";
import { useGetProducts } from "./customHooks/CustomHooks";
import Loading from "./layouts/Loading";
import { ErrorNetwork } from "./errors/Errors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDollarSign,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

function ProductDetails() {
  // Obteniendo datos del producto y estado de carga usando el custom hook
  const { loading, productsData, error } = useGetProducts();
  const [productDetail, setProductDetail] = useState({});
  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const id = parseInt(useParams().id); // Obteniendo el ID del parámetro de la URL
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  // Carga los detalles del producto cuando se obtienen los datos
  useEffect(() => {
    if (productsData) {
      setProductDetail(productsData.filter((product) => product.id === id));
    }
  }, [productsData, id]);

  // Configura el temporizador para ocultar la alerta después de cierto tiempo
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  }, [alert]);

  // Función para manejar el cambio en la cantidad de productos
  const quantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    dispatch({
      type: "ADD",
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: quantity,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loading className="position-relative" />
      ) : error ? (
        <ErrorNetwork />
      ) : (
        productDetail[0] && (
          <Container>
            <Row className="mb-5">
              {/* Imagen del producto */}
              <Col xs="12" md="6">
                <img
                  className="img-fluid"
                  src={productDetail[0].image}
                  alt={`Imagen de ${productDetail[0].title}`}
                />
              </Col>
              {/* Detalles del producto */}
              <Col xs="12" md="6" className="position-relative">
                <h1 className="fw-bolder my-4">{productDetail[0].title}</h1>
                <div className="d-flex align-items-center mb-4">
                  <FontAwesomeIcon
                    className="fs-3"
                    icon={faDollarSign}
                    size="xs"
                    style={{ color: "#8db8b7" }}
                  />
                  <h2 className="my-0 ms-1">{productDetail[0].price}</h2>
                </div>
                <p className="mb-4">Stock: {productDetail[0].rating.count}</p>
                <div className="d-flex align-items-start">
                  <p className="mb-0">{productDetail[0].rating.rate}</p>
                  <FontAwesomeIcon
                    className="fs-5"
                    icon={faStar}
                    size="xs"
                    style={{ color: "#8db8b7" }}
                  />
                </div>
                <hr />
                <p className="description">{productDetail[0].description}</p>
                <label htmlFor="">
                  Quantity
                  <input
                    type="number"
                    onChange={quantityChange}
                    className="input-quantity ms-2"
                    value={quantity}
                  />
                </label>
                <hr className="mb-5" />
                {/* Botón para agregar al carrito */}
                <div className="d-grid gap-2 mx-2">
                  {!inCart ? (
                    <button
                      onClick={() => {
                        addToCart(productDetail[0]);
                        setInCart(true);
                        setAlert(true);
                      }}
                      className="py-3 rounded button-add-cart d-flex align-items-center justify-content-center"
                      size="lg"
                    >
                      ADD TO CART
                      <FontAwesomeIcon
                        className="ms-2 fs-6 add-icon"
                        icon={faPlus}
                        beat
                        size="xs"
                      />
                    </button>
                  ) : (
                    <button
                      className="fade-in py-3 rounded d-flex align-items-center justify-content-center"
                      size="lg"
                      style={{ color: "#212529", cursor: "inherit" }}
                    >
                      IN THE CART
                      <FontAwesomeIcon
                        className="ms-2 fs-6 add-icon"
                        icon={faCartShopping}
                        size="xs"
                        style={{ color: "#212529" }}
                      />
                    </button>
                  )}
                </div>
                {/* Alerta */}
                {alert && (
                  <p className="add-cart-alert text-center position-absolute py-1">
                    Product added to cart
                  </p>
                )}
              </Col>
            </Row>
          </Container>
        )
      )}
    </>
  );
}

export default ProductDetails;