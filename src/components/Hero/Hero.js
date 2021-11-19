// dependencies
import './Hero.css';
import {Button, Container} from 'react-bootstrap';
import { useHistory } from 'react-router';

function Hero() {
    const history = useHistory();

    const goToService = () => history.push('/items');
    
    return (
        <section className="hero-section">
            <Container>
            <div className="w-50">
                <h1 className="display-5 fw-bold">Watch Hunter Online Shopping Center</h1>
                <p className="">We sell branded watch and thats are luxury watch. Our watch hase great brand value. Want to purchase one? Expore our all watches.</p>
                <Button className="fw-bold" style={{backgroundColor: "#F9706A", borderColor: "#F9706A"}} onClick={goToService}>Explore!</Button>
            </div>
            </Container>
        </section>
    )
}

export default Hero;