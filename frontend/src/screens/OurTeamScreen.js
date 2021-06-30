import React from 'react'
import {Container, Col } from 'react-bootstrap'

const OurTeamScreen = () => {
    return (
        <Container>
            <section id="home-heading" class="p-5">
                <div className="dark-overlay">
                    <div className="row">
                        <div className="col">
                            <div className="container pt-5">
                                <h1>Team Members</h1>
                                <p className="d-none d-md-black"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-heading" class="p-5">
                <div className="dark-overlay">
                    <div className="row">
                        <div className="container pt-5">
                            <Col className="text-center py-3">
                                <img src="/images/images1/members.png" />
                                <p><h7>Mr Ralph, Miss Blessing, Mr Franc</h7></p>
                            </Col>
                            <p className="d-none d-md-block"></p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
    
}

export default OurTeamScreen
