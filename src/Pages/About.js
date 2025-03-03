
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

// banner img
import about_img1 from '../Assets/Images/about1.png';
import about_img_shape1 from '../Assets/Images/about-shape1.svg';
import about_img2 from '../Assets/Images/about2.png';
import about_img_shape2 from '../Assets/Images/about-shape2.svg';


function About() {
  return (
    <>
    <div className="About_sec">
      <Container>
        <Row>


            <Col lg={5}>
                <div className="about-img">
                    <img src={about_img1} alt="about-img1" className="about-img1" />
                    <img src={about_img_shape1} alt="about_img_shape1" className="about_img_shape1" />
                    <img src={about_img2} alt="about-img2" className="about-img2" />
                    <img src={about_img_shape2} alt="about_img_shape2" className="about_img_shape2" />
                </div>
            </Col>

            <Col lg={7}>
                <div className="about_main">
                <div className="about_title">
                    <span>About Us</span>
                    <h2 className="mt-4">Exclusive technology to</h2>
                    <h2>provide IT solutions</h2>
                    <h5>During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our</h5>
                    <p> Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different. </p>
                    <Button className="about_btn">More About Us</Button>
                </div>
                </div>
            </Col>

            

        </Row>
      </Container>
    </div>
  
    </>
  );
}

export default About;