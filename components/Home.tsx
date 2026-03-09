import React from 'react'
import PremiumNavbar from './Navbar'
import Hero from './Hero'
import Categories from './Categories'
import Features from './Feature'
import FacebookGallery from './FacebookGallery'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <PremiumNavbar/>
    <Hero/>
    <Categories/>
    <Features/>
    <FacebookGallery/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default Home