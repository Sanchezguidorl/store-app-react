import {  useState } from "react";
import CardComponent from "./CardComponent";
import { Col, Row } from "react-bootstrap";
import { useGetProducts, usePagination } from "../customHooks/CustomHooks";
import Loading from "./Loading";

function Products() {
  const { productsData, loading, error } =useGetProducts();
  const [currentPage, setCurrentPage] = useState(2);
  const {products, pages}=usePagination(productsData, currentPage);

  const pagesDiv= pages.map((page)=> <h1 key={page}> Hola {page}</h1>);
  return (
<Row className="my-5 g-2 justify-content-center">
      {!loading ?<>{ products.map((product) =>
      <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="p-0  d-flex justify-content-center">
      <CardComponent product={product} />
      </Col>
      )}{
      pagesDiv}
      </>
      :
      <Loading/>
      }
    </Row>
  );
}

export default Products;
