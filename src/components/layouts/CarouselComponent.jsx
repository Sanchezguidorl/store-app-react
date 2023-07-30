import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/slide1.jpg';
import Slide2 from '../../assets/slide2.jpg';
import Slide3 from '../../assets/slide3.jpg';
function CarouselComponent() {
  return (
    <Carousel id='carousel'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="Primer diapositiva"
        />
        <Carousel.Caption className='top-0'>
          <h3>First slide label</h3>
          <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Segunda diapositiva"
        />
        <Carousel.Caption className='top-0'>
          <h3>First slide label</h3>
          <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Tercera diapositiva"
        />
        <Carousel.Caption className='top-0'>
          <h3>Second slide label</h3>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;