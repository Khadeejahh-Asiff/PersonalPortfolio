import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MailchimpForm from "./MailChimpSubscribe";
import logo from "../Assests/Images/bird.png";
import navIcon1 from "../Assests/Images/nav-icon1.svg";
import navIcon2 from "../Assests/Images/Github.svg";
import navIcon3 from "../Assests/Images/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img
              style={{ height: "200px", width: "200px" }}
              src={logo}
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/">
                <img className="linkedin-footer" src={navIcon1} alt="Icon" />
              </a>
              <a href="/">
                <img className="github-footer" src={navIcon2} alt="Icon" />
              </a>
              <a href="/">
                <img className="instagram-footer" src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
