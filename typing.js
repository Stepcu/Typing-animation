import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { ReactTyped } from "react-typed"; // Typing animation library

const Home = () => {
  return (
    <Container
      fluid
      className="home d-flex flex-column justify-content-center align-items-center flex-grow-1"
      style={{
        height: "calc(100vh - 60px)", // Adjusts for footer height (60px)
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Row className="hero align-items-center w-100">
        {/* Empty Column for spacing or future content */}
        <Col
          md={4}
          className="d-flex flex-column align-items-center justify-content-center"
        ></Col>

        {/* Center Column with Typing Animation */}
        <Col
          md={4}
          className="d-flex flex-column align-items-center justify-content-center text-center"
        >
          <ReactTyped
            className="display-2" // Large text styling
            strings={[
              "I'M STEF", // First line
              "A PASSIONATE SOFTWARE DEVELOPER", // Second line
              "FROM VISION TO REALITY, ONE LINE OF CODE AT A TIME!", // Third line
            ]}
            typeSpeed={100} // Typing speed
            backSpeed={50} // Backspacing speed
            loop // Infinite loop
            showCursor={true} // Display blinking cursor
            cursorChar="✒️" // Custom cursor character
          />
        </Col>

        {/* Empty Column for spacing or future content */}
        <Col
          md={4}
          className="d-flex flex-column align-items-center justify-content-center"
        ></Col>
      </Row>
    </Container>
  );
};

export default Home;
