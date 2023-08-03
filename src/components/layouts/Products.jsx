import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { Col, Pagination, Row } from "react-bootstrap";
import { useGetProducts, usePagination } from "../customHooks/CustomHooks";
import Loading from "./Loading";
import axios from "axios";

function Products() {
  const { productsData, loading, error } = useGetProducts();
  const [categorySelected, setCategorySelected]= useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { products, pages } = usePagination(productsData, currentPage, categorySelected);
  const [categories, setCategories] = useState();

useEffect(()=>{
const getCategories=async()=>{
const result= await axios.get('https://fakestoreapi.com/products/categories');
setCategories(result.data);
};
getCategories()
},[])

useEffect(()=>{
  if(pages.length===1){
    setCurrentPage(1);
  }
},[pages.length])
  const pageItem =pages.length>1 && pages.map((page) => (
    <Pagination.Item
      className=""
      active={currentPage === page}
      onClick={() => setCurrentPage(page)}
      key={page}
    >
      {page}
    </Pagination.Item>
  ));

  return (
    <Row className="my-3 g-2 justify-content-center">
      {!loading ? (
        error ? (
          error
        ) : (
          <>
          <div className='w-100 d-flex justify-content-center my-4'>
<label htmlFor="">
  Category
<select name="Categories" className='text-center rounded-2 select-input' defaultValue='' id="" onChange={(e)=>setCategorySelected(e.target.value)}>
<option value="All">--All--</option>
{categories && categories.map((category)=>(
  <option key={category} value={category}>{category}</option>
))}
  </select>
</label>
</div>
            {products.map((product) => (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="p-0  d-flex justify-content-center"
              >
                <CardComponent product={product} />
              </Col>
            ))}
            <Pagination className="justify-content-center my-4">
              {pageItem}
            </Pagination>
          </>
        )
      ) : (
        <Loading />
      )}
    </Row>
  );
}

export default Products;
