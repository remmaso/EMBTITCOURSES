import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
        <div className="social-container">
          <Container>
             <Row>
             <Col i className='text-left py-3'><a href='/socialfollow/about'><h3>About Us</h3></a></Col>
              <Col className='text-right py-3'>
                  <a href='/socialfollow/about'></a>
                    <h3>Contact Us</h3>
                   <h5> LOCATION:</h5>
                  <i className="fa fa-road"></i>No 6, Eputu-Ogunfayo Road, off Lekki-Epe Expressway, Eputu, Ibeju-Lekki, Lagos, Nigeria
                  <h5>PHONE:</h5>
                  <p> <i className="fa fa-phone"></i>(234) 0802  222 2002</p>
                   <i className="fa fa-phone"></i>(234) 0708 717 8201
                   <h5>Email:</h5>
                    <p><i className="fa fa-envelope"></i>info@embtec.com.ng</p>
                    
            
      <h3>US @</h3>
      <a href="https://www.youtube.com/channel/UCUR-bZgkSCVvpBVvlrXPegg"
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/embteckonzultz/"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/embteckonzultz" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/embteckonzultz/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
        </Col>
      </Row>
      </Container>
      
      <Col i className='text-center py-3'>Copyright &copy; EMBTEC Konzultz 2021</Col>
      </div>
  );
}