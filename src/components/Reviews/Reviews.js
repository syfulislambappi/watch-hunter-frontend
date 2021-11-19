// dependencies
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap'
import Review from '../Review/Review';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://watch-hunter.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-4">Latest Reviews</h2>
                <Row>
                    {reviews.map(review => <Review key={review._id} review={review} />)}
                </Row>
            </Container>
        </section>
    )
}

export default Reviews;