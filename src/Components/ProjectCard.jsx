import React from "react";
import Col from "react-bootstrap/Col";

function ProjectCard({ title, Description, ImageUrl }) {
  return (
    <div className="project-card-div">
      <Col sm={12} md={20}>
        <div className="proj-imgbx">
          <img src={ImageUrl} alt="Images" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{Description}</span>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default ProjectCard;
