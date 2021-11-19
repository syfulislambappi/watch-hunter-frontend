import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <footer className="my-5">
            <Container>
                <hr />
                <Row className="my-5">
                    <Col md="4" sm="6">
                        <Image src={logo} className="mb-3" style={{width: '150px'}} />
                        <p className="fw-bold my-0">Address</p>
                        <p>Noyatola, Moghbazara, Ramna, Dhaka-1217</p>
                        <p className="fw-bold my-0">Need Help?</p>
                        <p>Call: +8801704504710</p>
                    </Col>
                    <Col md="4" sm="6">
                        <h4 className="mb-4">About Menu</h4>
                        <p className='mb-2'><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Home</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/products" style={{textDecoration: 'none', color: "black"}}>Explore Watch</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/reviews" style={{textDecoration: 'none', color: "black"}}>Reviews</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Blogs</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Contact</NavLink></p>
                    </Col>
                    <Col md="4" sm="6">
                        <h4 className="mb-4">Useful Links</h4>
                        <p className='mb-2'><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Privacy Policy</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Return Policy</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Contact Us</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>Promotions</NavLink></p>
                        <p className="mb-2"><NavLink className="my-0" to="/" style={{textDecoration: 'none', color: "black"}}>FAQs</NavLink></p>
                    </Col>
                </Row>
                <hr />
                <p className="my-5 text-muted">Copyright © <NavLink to='/'>Watch Hunter.</NavLink> All Right Reserved.</p>
            </Container>
        </footer>
    )
}

export default Footer
