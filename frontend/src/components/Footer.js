import React, {Component} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <div className={"container"}>
                    <div className={"first"}>
                        <div className={"row"}>
                            <div className={"col-3 logo"}>
                                Embtec Konzultz
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Company</div>
                                <div className={"position active"}>About Us</div>
                                <div className={"position active"}>Careers</div>
                                <div className={"position active"}>Pricing</div>
                                <div className={"position active"}>Meet us</div>
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Knowledge</div>
                                <div className={"position active"}>Blog</div>
                                <div className={"position active"}>Help Center</div>
                                <div className={"position active"}>Privacy Policy</div>
                                <div className={"position active"}>Terms and conditions</div>
                            </div>
                            <div className={"col-3"}>
                                <div className={"section"}>Account</div>
                                <div className={"position active"}>Sign in</div>
                                <div className={"position active"}>Register</div>
                                <div className={"position active"}>F.A.Q.</div>
                            </div>
                        </div>
                    </div>
                    <div className={"row second"}>
                        <div className={"col"}>
                            Embtec 2021 All rights reserved
                        </div>
                        
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
                </div>
            </div>
        );
    }
}

export default Footer
