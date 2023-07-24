import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection';
import './App.css'
import Companies from './component/Companies';
import Courses from './component/Courses';
import Achievement from './component/Achievement';
import Categories from './component/Categories';
import Feedback from './component/Feedback';
import CTA from './component/CTA';
import Footer from './component/Footer';
     





const App = () => {
  return (
    <div>
   <Navbar/>
   <HeroSection/>
   <Companies/>
   <Courses/>
   <Achievement/>
   <Categories/>
   <Feedback/>
   <CTA/>
   <Footer/>
   </div>
  );
};

export default App
