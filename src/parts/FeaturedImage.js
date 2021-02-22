import React from 'react'
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';
import showCase_1 from '../assets/3.png'
import CustomCard from '../components/CustomCard'
import bg1 from '../assets/1.png'
import bg2 from '../assets/2.png'

// const FeaturedImage = () => {     return (         <section className="mb-5
// container">             <h4 className="mb-3">Recommended For You</h4>
//     <Row className="featured">                 <Col className="col-6">
//              <Row>                         <Col style={{marginBottom:
// "30px"}} className="col-12">                             <CustomCard
//                        title="Seasonal Gift Set"
//    desc="Birthday Gift | Wedding Gift | Xmas Gift"
//      url="#home"                                 bg={bg1}/>
//       </Col>                         <Col className="col-12">
//             <CustomCard title="Reed Diffuser" desc="Pewangi Ruangan"
// url="#home" bg={bg2}/>                         </Col>
// </Row>                 </Col>                 <Col xs="12" md="3"><Image
// className="featured-card" src={showCase_1}/></Col>                 <Col
// xs="12" md="3"><Image className="featured-card" src={showCase_1}/></Col>
//        </Row>         </section>     ) }

const FeaturedImage = () => {
    return (
        <section className="mb-5 container">
            <h4 className="mb-3">Recommended For You</h4>
            <Row className="featured">
                <Col
                    style={{
                    marginBottom: "30px"
                }}
                    lg="6" md="12">
                    <CustomCard
                        title="Seasonal Gift Set"
                        desc="Birthday Gift | Wedding Gift | Xmas Gift"
                        url="#home"
                        bg={bg1} />
                </Col>
                <Col xs="12" md="3"><Image className="featured-card" src={showCase_1}/></Col>
                <Col xs="12" md="3"><Image className="featured-card" src={showCase_1}/></Col>
                <Col
                    style={{
                    marginBottom: "30px"
                }}
                    lg="6" md="12">
                    <CustomCard
                        title="Seasonal Gift Set"
                        desc="Birthday Gift | Wedding Gift | Xmas Gift"
                        url="#home"
                        bg={bg1}/>
                </Col>
            </Row>
        </section>
    )
}

export default FeaturedImage
