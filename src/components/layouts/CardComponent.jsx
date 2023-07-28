import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function CardComponent({product}){
    return (
        <Card className='card'>
          <Card.Img variant="top"src={product.image} />
          <Card.Body className='pt-4 text-center px-0 position-absolute bottom-0 w-100'>
          <div className='card-decorator position-absolute'></div>
            <Card.Title className='px-2 mb-3 pt-3'>{product.rating.rate}</Card.Title>
            <Card.Text>{product.title}</Card.Text>
            <Button className='button-primary' variant="outline-dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

CardComponent.propTypes={
  product: PropTypes.object.isRequired
}

export default CardComponent;