import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Loading from '../layouts/Loading';
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
          <Card.Text className='px-2'>Stock: {product.rating.count}</Card.Text>
          <Button className='button-primary' variant="outline-dark">Go somewhere</Button>
        </Card.Body>  
        </Card>
      );
}

CardComponent.propTypes={
  product: PropTypes.object.isRequired
}

export default CardComponent;