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
import CustomCard from '../components/CustomCard'

const FeaturedImage = () => {
    return (
        
        <section className="container">
                <Row className="featured-image">
                    <Col className="col-6">
                        <Row>
                        <Col className="mb-3 col-12">
                        <CustomCard title="Seasonal Gift Set" desc="Birthday Gift | Wedding Gift | Xmas Gift" url="#home"/>
                        </Col>
                        <Col className="col-12">
                        <CustomCard title="Seasonal Gift Set" desc="Birthday Gift | Wedding Gift | Xmas Gift" url="#home"/>
                        </Col>
                        </Row>
                    </Col>
                    <Col className="col-3"><Image className="banner-logo" src={BannerLogo}/></Col>
                    <Col className="col-3"><Image className="banner-logo" src={BannerLogo}/></Col>
                </Row>
        </section>
    )
}

export default FeaturedImage
