// dependencies
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import useProducts from '../../../hooks/useProducts';

function ProductsSection() {
    const {products} = useProducts()

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center">Our All Branded Watches</h2>
                <p className="text-center mb-4">Explore our watches and purchase one watches. Then show your luxuriasness.</p>
                <Row>
                    {products.slice(0, 6).map(product => <Product key={product._id} product={product} />)}
                </Row>
            </Container>
        </section>
    )
}

export default ProductsSection;