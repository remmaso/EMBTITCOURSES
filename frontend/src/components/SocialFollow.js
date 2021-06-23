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
                                <div className={"position active"}><a href='/socialfollow/about'>About Us</a></div>
                                <div className={"position active"}><a href='/services'>Services</a></div>
                                <div className={"position active"}><a href='/remita'>F.A.Q</a></div>
                                
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Support</div>
                                <div className={"position active"}><a href='/blogscreen'>Blog</a></div>
                                  
                                <div className={"position active"}><a href='/careerscreen'>Careers</a></div>
                                <div className={"position active"}><a href='/privacy'>Privacy Policy</a></div>
                                
                                
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Email Us @</div>
                                <div className={"position active"}><a href='/#'>info@embtec.com.ng</a></div>
                                <div className={"position active"}><a href='#'>support@embtec.com.ng</a></div>
                                <div className={"position active"}>Phone Us @</div>
                                <p><i className='fa fa-phone'></i>234 802 222 2002</p>
                                <i className='fa fa-phone'></i>234 708 717 8201
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
