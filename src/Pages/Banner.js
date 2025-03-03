
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// banner img
import banner_img from '../Assets/Images/banner.png';


// page import

import About from '../Pages/About';
import Service from '../Pages/Service';



function Banner() {
  return (
    <>
    <div className="banner_sec">
      <Container>
        <Row>

          <Col lg={7}>
            <div className="banner_main">
              <div className="banner_title">
                <h4>We provide professional IT services</h4>
                <h2>Delivering tech </h2>
                <h2>solutions for </h2>
                <h2>your startups</h2>
                <p className="banner-p">It is a long established fact that a reader will be distracted by the </p>
                <p> readable content of a page when looking at its layout. </p>
                <Button className="Banner_btn">Work With Us</Button>
              </div>
            </div>
          </Col>

          <Col lg={5}>
           <div className="banner-img">
              <img src={banner_img} alt="baner-img" />
           </div>
          </Col>

        </Row>
      </Container>
    </div>
    <About />
    <Service />
    </>
  );
}

export default Banner;