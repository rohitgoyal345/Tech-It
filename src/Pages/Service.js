
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// service-img

import service_img1 from '../Assets/Images/service-img1.png';
import service_img2 from '../Assets/Images/service-img2.png';
import service_img3 from '../Assets/Images/service-img3.png';
import service_img4 from '../Assets/Images/service-img4.png';
import service_img5 from '../Assets/Images/service-img5.png';
import service_img6 from '../Assets/Images/service-img6.png';

function Service() {
  return (
    <>
    <div className="Service_sec">
      <Container>
        <Row>


            <Col lg={12}>
              <div className="service-heading">
                 <span>Our Service</span>
                 <h2 className="mt-4">Services We Provide World</h2>
                 <h2>Wide Customers</h2>
              </div>
            </Col>

            <Col lg={4}>
                <div className="service-card-main">
                  <div className="service-card-img">
                    <img src={service_img1} alt="" />
                  </div>
                  <div className="service-card-title">
                    <h2>Web Development</h2>
                    <p>The wise man therefore always doing holding these matters to principles sunt offer.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="service-card-main">
                  <div className="service-card-img">
                    <img src={service_img2} alt="" />
                  </div>
                  <div className="service-card-title">
                    <h2>CMS Development</h2>
                    <p>The wise man therefore always doing holding these matters to principles sunt offer.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="service-card-main">
                  <div className="service-card-img">
                    <img src={service_img3} alt="" />
                  </div>
                  <div className="service-card-title">
                    <h2>UI/UX Design</h2>
                    <p>The wise man therefore always doing holding these matters to principles sunt offer.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="service-card-main">
                  <div className="service-card-img">
                    <img src={service_img4} alt="" />
                  </div>
                  <div className="service-card-title">
                    <h2> Artificial Intelligence </h2>
                    <p>The wise man therefore always doing holding these matters to principles sunt offer.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="service-card-main">
                  <div className="service-card-img">
                    <img src={service_img5} alt="" />
                  </div>
                  <div className="service-card-title">
                    <h2>App Development</h2>
                    <p>The wise man therefore always doing holding these matters to principles sunt offer.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="service-card-main">
                  <div className="service-card-img">
                    <img src={service_img6} alt="" />
                  </div>
                  <div className="service-card-title">
                    <h2>Digital Marketing</h2>
                    <p>The wise man therefore always doing holding these matters to principles sunt offer.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
            </Col>

          

            

        </Row>
      </Container>
    </div>
  
    </>
  );
}

export default Service;