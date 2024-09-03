import React from 'react'
import logo from '../assets/logo final-35 2.png';

function Footer() {
  return (
   <div className='row justify-content-center' style={{backgroundColor:'rgba(4, 57, 83, 1)', padding: '1rem'}}>
     <div className='col-12 col-md-6 text-center p-3'>
       <img src={logo} alt="Footer Logo" className='img-fluid' style={{ maxWidth: '100%', height: 'auto' }} />
     </div>
   </div>
  )
}

export default Footer