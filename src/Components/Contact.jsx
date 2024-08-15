import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactImg from "../Assests/Images/contact-img.svg";

function Contact() {
  const formDetails = [
    {
      firstName: "",
      LastName: "",
      email: "",
      Phone: "",
      Message: "",
    },
  ];
  const [form, setForm] = useState(formDetails);
  const [buttonText, setbuttonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setForm({ ...formDetails });
    [category] = value;
  };

  const handleonsubmit = async (e) => {
    e.preventDefault();
    setbuttonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setbuttonText("Send");
    let result = await response.json();
    setForm(formDetails);
    if (result.code === 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  return (
    <div className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={ContactImg} alt="contact-icon" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch!</h2>
            <form onSubmit={handleonsubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={form.firstName}
                    placeholder="firstName"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={form.LastName}
                    placeholder="lastName"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={form.email}
                    placeholder="E-mail"
                    onChange={(e) => onFormUpdate("E-mail", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={form.Phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("Phone", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows={6}
                    type="text"
                    value={form.Message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("Message", e.target.value)}
                  />
                  <button className="contact-button" type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.Message && (
                  <Col>
                    <p
                      className={
                        status.success === "false" ? "danger" : "success"
                      }
                    >
                      {status.Message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
