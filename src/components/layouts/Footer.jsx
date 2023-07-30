import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faAt,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import SocialMediaIcon from "../SocialMediaIcon";

function Footer() {
  return (
    <footer id="Footer" className="px-3 px-md-4 py-5">
      <Row className="align-items-start justify-content-evenly">
        <Col xs={12} md={4}>
          <ul className="list-unstyled text-break">
            <h4 className="mb-4">Contact</h4>
            <div className="d-flex mt-3">
              <FontAwesomeIcon
                className="fs-5 me-3"
                icon={faPhoneVolume}
                size="xs"
                style={{ color: "#212529" }}
              />
              <li className="fs-6">Tel(356-428-3349)</li>
            </div>
            <div className="d-flex mt-3">
              <FontAwesomeIcon
                className="fs-5 me-3"
                icon={faAt}
                size="xs"
                style={{ color: "#212529" }}
              />
              <li className="fs-6">store@storeappreact.com</li>
            </div>
            <div className="d-flex mt-3">
              <FontAwesomeIcon
                className="fs-5 me-3"
                icon={faLocationDot}
                size="xs"
                style={{ color: "#212529" }}
              />
              <li className="fs-6">1 Grafton Street-Dublin-Ireland</li>
            </div>
            <div className="d-flex mt-4">
              <SocialMediaIcon icon={faSquareFacebook}/>   
              <SocialMediaIcon icon={faSquareInstagram}/>   
              <SocialMediaIcon icon={faEnvelope}/>   
            </div>
          </ul>
        </Col>
        <Col
          className="mt-3 mt-md-0 d-flex justify-content-center"
          xs={12}
          md={5}
        >
          <iframe
          className="w-100 mw-100 p-0"
            height={290}
            src="https://maps.google.com/maps?hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Store)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
