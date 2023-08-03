import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Loading from '../layouts/Loading';
import { NavLink } from 'react-router-dom';
function CardComponent({product}){
  const [imageLoaded, setImageLoaded]= useState(false);

    return (
        <Card className='card'>
{ !imageLoaded &&
        <Loading />
}
        <Card.Img variant="top"src={product.image} onLoad={()=>setImageLoaded(true)}/>
        <Card.Body className='pt-4 text-center px-0 position-absolute bottom-0 w-100'>
        <div className='card-decorator position-absolute'></div>
          <Card.Title className='px-2 mb-3 pt-3'>{product.title}</Card.Title>
          <Card.Text className='px-2'>Price: ${product.price}</Card.Text>
          <NavLink to={`product/${product.id}`} className='button-primary btn' variant="outline-dark">view details</NavLink>
        </Card.Body>  
        </Card>
      );
}

CardComponent.propTypes={
  product: PropTypes.object.isRequired
}

export default CardComponent;