import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Cart(){
const products= useSelector(store=> store.products); 
const dispatch= useDispatch();
const [totalPrice, setTotalprice]=useState(0);

useEffect(()=>{
if(products){
    const pricesArray= products.map((product)=> product.price*product.quantity);

    setTotalprice(parseFloat(pricesArray.reduce((acum, prox)=>acum+prox,0)).toFixed(2));
}
},[products])

const addQuantity=(product)=>{
    dispatch({type:'ADD', payload:{id: product.id,title: product.title,price: product.price, quantity: 1}});
  }

  console.log(products)
return(
    <Container id="Cart" className="position-relative my-4 p-0 d-flex align-items-center rounded-5">
     { !products[0] ?
(
  <h3 className="text-secondary text-center mx-auto">Cart is empty</h3>
)
      :
    (<>
    <Table className="p-0 m-0 m-md-4 text-center" striped bordered hover variant="light" size="sm">
    <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
    {products.map((product)=>(
        <tr className="align-middle" key={product.id}>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>
        <button className='rounded-5 button-quantity' onClick={()=>dispatch({type:'DELETE',payload:{id:product.id}})}>{'<'}</button>
            <span className='mx-2'>{product.quantity}</span>
            <button className='rounded-5 button-quantity' onClick={()=>addQuantity(product)}>{'>'}</button>
        </td>
      </tr>
    ))}
    </tbody>
  </Table>
  <h5 className="position-absolute bottom-0 total-price p-3 bg-white rounded-4">Total: {totalPrice}</h5>
  </> 
)}
  </Container>
)
}

export default Cart;