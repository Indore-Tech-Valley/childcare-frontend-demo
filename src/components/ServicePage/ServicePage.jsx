import React from 'react'
import Services from '../Services/Services'
import Header from '../../pages/Header/Header'


const ServicePage = () => {
  return (
    <div>
      <Header title={`Services`} image={`https://weecarepediatrics.com/wp-content/uploads/2023/05/Child-Immunization.png`}/>
      <Services/>
    </div>
  )
}

export default ServicePage
