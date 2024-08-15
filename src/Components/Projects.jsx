import React from "react";
import ProjectLogo from "../Assests/Images/monkey.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProjectCard from "./ProjectCard";
// import BackImage from "../Assests/Images/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "News Monkey",
      Description:
        "A website designed using ReactJS. The theme of website  is focused on daily Blogs",
      ImageUrl: ProjectLogo,
    },
    {
      title: "E-commerce Website",
      Description:
        "A website designed using ReactJS. The theme of website  is focused on E-commerce",
      ImageUrl: ProjectLogo,
    },
    {
      title: "Tutorials List",
      Description:
        "A website designed using ReactJS. The theme of website  is focused on basic components of ReactJS",
      ImageUrl: ProjectLogo, //Picture of same size can be used
    },
    {
      title: "Portfolio Website",
      Description:
        "A website designed using ReactJS. The theme of website  is focused on personal details",
      ImageUrl: ProjectLogo,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="project-box">
              <h2>Projects</h2>
              <p>
                Projects that I have built using HTML, CSS, ReactJS and
                Bootstrap
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className="tab-content">
                  <Tab.Pane eventKey="first">
                    <div className="project-display">
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="project-display">
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
