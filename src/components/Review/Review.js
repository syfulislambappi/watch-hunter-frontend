// dependencies
import { Card, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

function Review({ review }) {

    // destructure review info
    const { name, image, description, rating } = review;

    return (
        <Col className="mb-4 mx-auto">
          <Card className="mx-auto p-1" style={{ width: '20rem' }}>
            <Card.Text className="my-4 text-center">{`${description.substring(0, 105)} ...`}</Card.Text>
            <p className="text-center">
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
             />
            </p>
            <Card.Body>
              <Card.Footer className="d-flex align-items-center justify-content-between">
                <img className="img-fluid rounded-circle w-25" src={image} alt={name} />
                <Card.Text>Reviewed by <b>{name}</b></Card.Text>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default Review;
