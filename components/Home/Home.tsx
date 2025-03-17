import React from 'react'
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import Hero from "@/components/Home/Hero/Hero";
import MarqueeComponent from "@/components/Home/MarqueeComponent/MarqueeComponent";
import About from "@/components/Home/About/About";
import Features from "@/components/Home/Features/Features";
import MarqueeComponentTwo from "@/components/Home/MarqueeComponent/MarqueeComponentTwo";
import Roadmap from "@/components/Home/Roadmap/Roadmap";
import Faq from "@/components/Home/FAQ/Faq";
import FooterComponent from "@/components/Home/FooterComponent/FooterComponent";
import HowToBuy from './HowToBuy/HowToBuy';

const Home = () => {
  return (
    <div className='bg-green-950'>
        <ResponsiveNav/>
        <Hero/>
        <MarqueeComponent/>
        <About/>
        <Features/>
        <Roadmap/>
        <MarqueeComponentTwo/>
        <HowToBuy/>
        <Faq/>
        <FooterComponent/>
    </div>
  )
}

export default Home