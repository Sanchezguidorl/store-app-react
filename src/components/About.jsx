import { Accordion, Container, Image } from "react-bootstrap";
import AboutImage from "../assets/about-image.jpg";
function About() {
  return (
    <Container>
      <div className="banner d-flex justify-content-center">
        <Image src={AboutImage} fluid />;
        <h1 className="position-absolute text-center text-wrap fs-4 p-2 px-md-5">
          Your One-Stop Destination for Fashion and Tech at <b>Store</b>
        </h1>
      </div>
      <section id="Questions">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Our Story</Accordion.Header>
            <Accordion.Body>
              Founded in 1990, Store was born out of a passion for fashion and a
              fascination with technology. Our team of dedicated fashion
              enthusiasts and tech experts came together with a shared vision of
              creating a platform that caters to modern individuals who crave
              the latest trends in both style and technology.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fashion Collection</Accordion.Header>
            <Accordion.Body>
              Explore our vast collection of fashionable clothing at Store that
              effortlessly blends style, comfort, and versatility. From chic
              streetwear to elegant evening wear, we have something to suit
              every taste and occasion. Our team curates the latest fashion
              trends from renowned designers and emerging brands, ensuring that
              you stay ahead in the style game.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tech Products</Accordion.Header>
            <Accordion.Body>
              In the fast-paced world of technology, staying up-to-date with the
              latest gadgets is essential. That&apos;s why we offer an exciting
              range of state-of-the-art tech products at Store that cater to
              your digital needs. From the latest smartphones and smartwatches
              to cutting-edge accessories and smart home devices, we&apos;ve got
              you covered.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Quality and Authenticity</Accordion.Header>
            <Accordion.Body>
              We understand the value of quality and authenticity when it comes
              to fashion and technology. That&apos;s why each product at Store
              undergoes rigorous quality checks to ensure that you receive
              nothing but the best. We partner with trusted suppliers and brands
              to guarantee the authenticity of every item we offer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Customer Satisfaction</Accordion.Header>
            <Accordion.Body>
              Your satisfaction is our top priority at Store, and we are
              committed to providing exceptional customer service. Our friendly
              and knowledgeable support team is always ready to assist you with
              any queries or concerns. Whether you need help with product
              selection or have questions about shipping, we are here to make
              your shopping experience seamless and enjoyable.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Community and Trends</Accordion.Header>
            <Accordion.Body>
              At Store, we believe in fostering a community of fashion-forward
              and tech-savvy individuals. Connect with like-minded individuals,
              share your style inspirations, and stay informed about the latest
              fashion and tech trends through our social media channels and
              newsletters.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Secure Shopping</Accordion.Header>
            <Accordion.Body>
              We understand the importance of online security at Store, and we
              take it seriously. Our website is equipped with robust security
              measures to safeguard your personal information and payment
              details. Shop with confidence, knowing that your privacy is
              protected.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Join Us Today</Accordion.Header>
            <Accordion.Body>
              Experience the perfect blend of fashion and technology at Store.
              Embrace the latest trends, discover innovative tech products, and
              shop with ease. Join our vibrant community and elevate your style
              and tech game today! Thank you for choosing Store. Happy shopping!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Container>
  );
}

export default About;
