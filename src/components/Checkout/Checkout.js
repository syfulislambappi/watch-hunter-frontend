import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Col, Container, Row } from "react-bootstrap";
import {BsFillArrowRightSquareFill} from "react-icons/bs"

const Checkout = () => {
    const history = useHistory();
    const {user} = useAuth();
    const {checkoutId} = useParams()
    const [product, setProduct] = useState(null)
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://watch-hunter.herokuapp.com/products/${checkoutId}`)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [checkoutId])

    const onSubmit = data => {
        const checkoutData = {...data, price: product.price, productName: product.name, image: product.image}
        fetch(`https://watch-hunter.herokuapp.com/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(checkoutData)
        })
        .then(res => res.json())
        .then(data => alert(data.message))
        history.push("/complete")
    }

    return (
        <>
        <h1 className="text-center my-5">Purchase Your Luxurias Watch</h1>
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Receiver Name</label>
                                <input id="name" type="text" className="form-control" {...register("name")} value={user.displayName} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">User Email Address</label>
                                <input id="email" type="email" className="form-control" {...register("email")} value={user.email} readOnly />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Receiver Phone Number</label>
                                <input id="mobile" type="text" className="form-control" {...register("mobile")} placeholder="Enter receiver mobile number" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Shipping Address</label>
                                <textarea className="form-control" {...register("address", {required: true})} placeholder="Enter shipping address" required />
                            </div>
                            <button type="submit" className="btn" style={{backgroundColor: "#FD696B", borderColor: "#FD696B", color: "white"}}><BsFillArrowRightSquareFill /> Checkout</button>
                        </form>
                    </Col>
                    <Col md={6}>
                        <div className="mb-5">
                            <h3>Ordered watch name is: <span className="fw-normal">{product?.name}</span></h3>
                            <h4>Price is: <span className="fw-normal mb-3">${product?.price}</span></h4>
                            <div className="w-50 my-3 bg-gray p-2 shadow radius-3">
                                <img className="img-fluid" src={product?.image} alt="food item" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Checkout
