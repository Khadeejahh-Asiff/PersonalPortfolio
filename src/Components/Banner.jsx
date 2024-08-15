import React, { useState, useEffect, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assests/Images/header-img.svg";
import Khadeejah from "../Assests/Images/me.jpeg";

function Banner() {
  const [loopNumber, setLoopNumber] = useState(0);
  const [deleting, setdeleting] = useState(false);
  const Rotate = useMemo(
    () => [
      "The Software Engineer",
      "The Web Developer",
      " The Front End Developer",
    ],
    []
  );
  const [text, setText] = useState("");
  const [delta, setdelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const tick = () => {
      let i = loopNumber % Rotate.length;
      let fullText = Rotate[i];
      let updatedText = deleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (deleting) {
        setdelta((prevDelta) => prevDelta / 2);
      }

      if (!deleting && updatedText === fullText) {
        setdeleting(true);
        setdelta(period);
      } else if (deleting && updatedText === "") {
        setdeleting(false);
        setLoopNumber(loopNumber + 1);
        setdelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, deleting, loopNumber, Rotate, period]);

  return (
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col className="column2" xs={12} md={7} xl={9}>
            <span className="tagline">Welcome to my Portfolio</span>
            <div className="text-area">
              <div className="image-overlay">
                <div className="text" xs={12} md={7} xl={6}>
                  <h1>
                    {"Hi I am Khadeejah : "}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Software Engineer | Web Development | Front-End Development
                    <br />
                    As a driven and skilled software engineer, I'm deeply
                    passionate about web development 🚀. With hands-on
                    experience in HTML, CSS, JavaScript, Bootstrap, and
                    React.js, I’ve honed my abilities to create dynamic and
                    responsive web applications 💻. My background also includes
                    working with Java Swing, C++, and SQL, demonstrating my
                    versatility in different programming environments 🛠️.
                    <br /> I’m committed to effective communication and
                    collaboration,underpinned by my proficiency in English 📚.
                    Now, fully prepared to dive into the industry, I'm eager to
                    contribute to innovative web projects and bring creative
                    solutions to life.
                  </p>
                  <button
                    className="banner-button"
                    onClick={() => console.log("connect")}
                  >
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                  <div className="banner-image">
                    <img src={headerImg} alt="" />
                  </div>
                </div>
              </div>
              <div className="my-image">
                <img src={Khadeejah} alt="Khadeejah" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
