// dependencies
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Product({ product }) {
    const history = useHistory()

    // destructure blog info
    const { name, description, price, image, _id } = product;
    
    const handleHistoy = id => {
      history.push(`/checkout/${id}`)
    }

    return (
        <Col className="mb-4 mx-auto">
          <Card className="mx-auto shadow" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
                <Card.Text>{`${description.substring(0, 75)} ...`}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 style={{color: '#F9706A'}}>{`$${price}`}</h6>
                    <Button onClick={() => handleHistoy(_id)} style={{backgroundColor: "#F9706A", borderColor: "#F9706A", color: "white"}}><BsFillArrowRightCircleFill /> Buy Now!</Button>
                </div>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default Product;
