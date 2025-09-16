import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import TrustedBrands from '../components/TrustedBrands'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <TrustedBrands /> */}
            <AiTools />
            <Testimonial />
            <Plan />
            <Footer />
        </>
    )
}

export default Home
