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
               <Col>
             <div className={"footer"}>
                <div className={"container"}>
                    <div className={"first"}>
                        <div className={"row"}>
                            <div className={"col-3 logo"}>
                               <h5> Embtec</h5>
                               </div>
                               
                            <div className={"col-3"}>
                                <div className={"section"}>Company</div>
                                <div className={"position active"}>About Us</div>
                                <div className={"position active"}>Services</div>
                                <div className={"position active"}>F.A.Q</div>
                                
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Support</div>
                                <div className={"position active"}>Blog</div>
                                <div className={"position active"}>Careers</div>
                                <div className={"position active"}>Privacy Policy</div>
                                
                                
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Contact Us</div>
                                <div className={"position active"}>info@embtec.com.ng</div>
                                <div className={"position active"}>support@embtec.com.ng</div>
                            </div>
                        </div>
                    </div>
                    <div className={"row second"}>
                        <div className={"col"}>
                            
                        </div>
                        <div className={"col-auto"}>
                        <i className="fa fa-facebook active" aria-hidden="true"/>
                            <i className="fa fa-twitter active" aria-hidden="true"/>
                            <i className="fa fa-instagram active" aria-hidden="true"/>
                            <i className="fa fa-linkedin active" aria-hidden="true"/>
                        </div>
                    </div>
                </div>
            </div>
            
            </Col>
          </Row>
      </Container>
      
      <Col i className='text-center py-3'>Copyright &copy; Embtec Konzultz 2021</Col>

      
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
      </div>
      
  );
}
