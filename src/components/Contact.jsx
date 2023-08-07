import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "./layouts/FormComponent";

function Contact() {
  return (
    <Container id="Contact" className="my-5">
      <h1 className="h3 mb-4">Contact Us for a Thriving Partnership!</h1>
      <p className="mb-5">
        Are you a business owner seeking a reliable and innovative supplier for
        your store? Look no further! At Store, we specialize in providing
        top-notch products that can elevate your business to new heights.
      </p>
      <FormComponent />
      <h2 className="h4 text-center">Why Choose Store?</h2>
      <Row className="text-center mb-5 mt-4">
        <Col xs={12} md={6} lg={3} className="border rounded pb-2 pt-4 mb-1 mb-lg-0">
          <p>
            <b>🌟 Quality Assured</b>: Our products undergo rigorous quality
            checks to ensure they meet the highest standards. We take pride in
            delivering items that not only meet but exceed customer
            expectations.
          </p>
        </Col>
        <Col xs={12} md={6} lg={3} className="border rounded pb-2 pt-4 mb-1 mb-lg-0">
          <p>
            <b>🚀 Innovation at Its Best</b>: Stay ahead of the curve with our
            cutting-edge and trendsetting merchandise. Our team keeps a close
            eye on market trends to offer you the latest and most sought-after
            products.
          </p>
        </Col>
        <Col xs={12} md={6} lg={3} className="border rounded pb-2 pt-4 mb-1 mb-lg-0">
          <p>
            <b>🤝 Partnership Approach</b>: We don&apos;t just consider you a
            customer – we view you as a partner. Your success is our success,
            and we&apos;re committed to working hand-in-hand to achieve mutual
            growth.
          </p>
        </Col>
        <Col xs={12} md={6} lg={3} className="border rounded pb-2 pt-4 mb-1 mb-lg-0">
          <p>
            <b>💡 Customization Options</b>: We understand that each business is
            unique. That&apos;s why we offer customization options that let you
            add your own touch to the products, helping you stand out in the
            market.
          </p>
        </Col>
      </Row>
      <h3 className="h4 mb-4">What Our Partners Say:</h3>
      <blockquote className="blockquote rounded-4 p-4">
        <p>
          &quot;Partnering with Store was a game-changer for my business. Their
          consistent quality and innovative products have attracted a whole new
          customer base.&quot;
        </p>
        <cite className="blockquote-footer">Informatic Store S.R.L</cite>
      </blockquote>
    </Container>
  );
}

export default Contact;
