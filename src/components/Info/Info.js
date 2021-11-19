import React from 'react'
import { Container } from 'react-bootstrap'
import pickup from '../../images/icons/pickup.png';
import customer from '../../images/icons/customer.png';
import payment from '../../images/icons/payment.png';

const Info = () => {
    return (
        <section>
            <Container className="my-4">
                <hr />
                <div className="d-flex justify-content-between flex-wrap pt-4">
                    <div className='d-flex' style={{color: '#F9706A'}}>
                        <div className="me-2">
                            <img src={pickup} alt="pickup" />
                        </div>
                        <div>
                            <h5 className="my-0">Free Shipping</h5>
                            <p>Free shipping on order</p>
                        </div>
                    </div>
                    <div className='d-flex' style={{color: '#F9706A'}}>
                        <div className="me-2">
                            <img src={customer} alt="customer" />
                        </div>
                        <div>
                            <h5 className="my-0">Support 24/7</h5>
                            <p>Contact us 24 hrs a day</p>
                        </div>
                    </div>
                    <div className='d-flex' style={{color: '#F9706A'}}>
                        <div className="me-2">
                            <img src={payment} alt="payment" />
                        </div>
                        <div>
                            <h5 className="my-0">Payment Secure</h5>
                            <p>Free shipping on order</p>
                        </div>
                    </div>
                </div>
                <hr />
            </Container>
        </section>
    )
}

export default Info
