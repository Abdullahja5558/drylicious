import React from 'react'
import PremiumNavbar from './Navbar'
import Hero from './Hero'
import Categories from './Categories'
import Features from './Feature'
import FacebookGallery from './FacebookGallery'
import Testimonials from './Testimonials'
import Footer from './Footer'
import FAQSection from './FAQSection'
import TrustedSection from './TrustedSection'
import OriginMap from './OriginMap'

const Home = () => {
  return (
    <>
    <PremiumNavbar/>
    <Hero/>
    <TrustedSection/>
    <Categories/>
    <OriginMap/>
    <Features/>
    <FacebookGallery/>
    <FAQSection/>
    <Testimonials/>
    
    <Footer/>
    
    </>
  )
}

export default Home