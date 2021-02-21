import React from 'react'
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';
import BannerLogo from '../assets/143424756_745548936090719_8597581662326965029_n.jpg'
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="tron">
                    <Col md={6}>
                        <div className="text-center">
                            <h2 className="title">Premium Reed Diffuser</h2>
                            <h5>Indonesia</h5>
                            <p className="description">
                                Enhance your home ambience
                            </p>
                            <p>
                                <Button variant="primary">Explore Now</Button>
                            </p>
                        </div>
                    </Col>
                    <Col md={6}><Image className="banner-logo" src={BannerLogo}/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
