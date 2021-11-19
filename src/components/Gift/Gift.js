import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import gift from '../../images/gift.jpg'

const Gift = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col >
                    <p style={{fontSize: '18px', color: "#FD696B"}}>SPECIAL OFFER</p>
                    <h3>SUCCULENT GARDEN</h3>
                    <h1>GIT BOXES</h1>
                    <p>From planter materials to style options, discover which planter is best for your space.</p>
                    <button className="btn text-white fw-bold" style={{backgroundColor: "#FD696B", borderColor: "FD696B"}}>Explore The Shop</button>
                </Col>
                <Col md="7">
                    <Image src={gift} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Gift
