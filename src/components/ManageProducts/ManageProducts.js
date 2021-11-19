import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ManageProduct from '../ManageProduct/ManageProduct'

const ManageProducts = () => {
    const [items, setItems] = React.useState([])
    
    useEffect(() => {
        fetch(`https://watch-hunter.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setItems(data))
    },[items])
    return (
        <div className="my-6">
            <h1 className="text-center my-5">All Watch Items</h1>
            <Container className="my-5">
            <table className="table table-warning table-bordered">
                <thead className="table-dark">
                    <tr className="text-center">
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete Order</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => <ManageProduct key={item._id} item={item} />)}
                </tbody>
            </table>
            </Container>
        </div>

    )
}

export default ManageProducts
