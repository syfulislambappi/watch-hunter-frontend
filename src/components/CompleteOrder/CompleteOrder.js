import React from 'react'
import { useHistory } from 'react-router'

const CompleteOrder = () => {
    const history = useHistory('/')
    const imageUrl = `https://image.freepik.com/free-vector/delivery-man-with-boxes-car-gives-package-client-parcel-carton-courier-person-postman-transport-express_1284-41994.jpg`
    return (
        <div className="my-5 text-center">
            <h1 className="text-center mb-4">Your watch will be arrived at your shipping address</h1>
            <div className="mx-auto w-25">
                <img className="img-fluid" src={imageUrl} alt="delivery" />
            </div>
            <button onClick={() => history.push('/products')} className="btn my-4" style={{backgroundColor: "#FD696B", borderColor: "#FD696B", color: "white"}}>Order More</button>
        </div>
    )
}

export default CompleteOrder;