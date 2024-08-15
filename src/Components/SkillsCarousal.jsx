import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Assests/Images/meter1.svg";
import meter2 from "../Assests/Images/meter2.svg";
import meter3 from "../Assests/Images/meter3.svg";
import colorsharp from "../Assests/Images/color-sharp.png";

function SkillsCarousal() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a web developer with expertise in ReactJS and front-end
                development, I bring a strong foundation in creating dynamic and
                responsive user interfaces.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="Item">
                  <img src={meter3} alt="Item-meter1" />
                  <h4>Web Development</h4>
                </div>
                <div className="Item">
                  <img src={meter2} alt="Item-meter2" />
                  <h4>Front-End Development</h4>
                </div>
                <div className="Item">
                  <img src={meter1} alt="Item-meter3" />
                  <h4>ReactJS, HTML</h4>
                </div>
                <div className="Item">
                  <img src={meter3} alt="Item-meter4" />
                  <h4>CSS Bootstrap</h4>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image" src={colorsharp} alt="background-css" />
    </div>
  );
}

export default SkillsCarousal;
