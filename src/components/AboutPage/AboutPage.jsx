import React, { useEffect } from 'react'
import AboutUs from '../AboutUs/AboutUs'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Header from '../../pages/Header/Header'
import Testimonial from '../Testimonial/Testimonial'
import { useLocation } from 'react-router-dom'
import ChildSpecialistTeam from '../ChildSpecialistTeam/ChildSpecialistTeam'




Testimonial

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
  if (location.hash === '#pediatricians') {
    // Delay scroll to allow layout/rendering to settle
    setTimeout(() => {
      const element = document.getElementById('pediatricians');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Try adjusting between 100–300ms if needed
  }
}, [location]);


  return (
    <div>
      <Header title={`About Us`} image={`https://apexgroupofhospitals.com/wp-content/uploads/2019/01/Pediatrics.jpg`}/>
      <AboutUs/>
    
       <div id="pediatricians">
          <ChildSpecialistTeam/>
      </div>
         <WhyChooseUs/>
      <Testimonial />
      <h1 className='hidden'>djhsewb</h1>

   
     
    </div>
  )
}

export default AboutPage
