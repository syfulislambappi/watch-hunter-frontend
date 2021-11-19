import Gift from "../Gift/Gift"
import Hero from "../Hero/Hero"
import Info from "../Info/Info"
import ProductsSection from "../Products/ProductsSection/ProductsSection"
import Reviews from "../Reviews/Reviews"

const Home = () => {
    return (
        <>
         <Hero />
         <Info />
         <ProductsSection />
         <Reviews />
         <Gift />
        </>
    )
}

export default Home
