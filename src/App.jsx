import { useState } from 'react'

import './App.css'
import logo from './assets/logo final-35 2.png'
import Radio from './components/Radio'

import Section2 from './components/Section2'
import Footer from './components/Footer'
import Section3 from './components/Section3'



function App() {


  return (
    <>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center shadow p-3 mb-2 bg-body-tertiary rounded w-100'>
            <img src={logo} alt="logo" className='img-fluid' />
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-12 col-md-8'>
            <h4 className='mt-5 mb-5 text-center' style={{ color: 'rgba(1, 129, 140, 1)' }}>
              SECTION I [15 POINTS]
            </h4>

<form action="
">
            
            <Radio/>




            <div className='row justify-content-center'>
            <p className='text-left' style={{ color: 'rgba(69, 90, 100, 1)', marginTop: '50px', marginRight: '3px', marginBottom: '3px', fontSize: '101%' }}>
            Lorem ipsum dolor sit amet
            </p>
            <div className='d-flex flex-column align-items-start mt-1 me-1 mb-1'>
              <label className='p-1' style={{ paddingLeft: '1px', width: '100%' }}>
                <select onChange={(e) => {
                  e.target.style.color = 'rgba(1, 129, 140, 1)';
                }} style={{ color: 'rgba(69, 90, 100, 1)', width: '100%' }}>
                  <option value="option1">Dropdown Option 1</option>
                  <option value="option2">Dropdown Option 2</option>
                  <option value="option3">Dropdown Option 3</option>
                  <option value="option4">Dropdown Option 4</option>
                </select>
              </label>
            </div>
            </div>

            <p className='text-left' style={{ color: 'rgba(69, 90, 100, 1)', marginTop: '50px', marginRight: '3px', marginBottom: '3px', fontSize: '101%' }}>
            Lorem ipsum dolor sit amet
            </p>

    <div className='d-flex flex-column align-items-start mt-1 me-1 mb-1'>
      <label className='p-1' style={{ paddingLeft: '1px' }}>
        <input 
          type="checkbox" 
          value="option1" 
          onChange={(e) => {
            e.target.nextSibling.style.color = e.target.checked ? 'rgba(1, 129, 140, 1)' : 'inherit';
          }}
        />
        <span> Checkbox Option 1</span>
      </label>
      <label className='p-1' style={{ paddingLeft: '1px' }}>
        <input 
          type="checkbox" 
          value="option2" 
          onChange={(e) => {
            e.target.nextSibling.style.color = e.target.checked ? 'rgba(1, 129, 140, 1)' : 'inherit';
          }}
        />
        <span> Checkbox Option 2</span>
      </label>
      <label className='p-1' style={{ paddingLeft: '1px' }}>
        <input 
          type="checkbox" 
          value="option3" 
          onChange={(e) => {
            e.target.nextSibling.style.color = e.target.checked ? 'rgba(1, 129, 140, 1)' : 'inherit';
          }}
        />
        <span> Checkbox Option 3</span>
      </label>
      <label className='p-1' style={{ paddingLeft: '1px' }}>
        <input 
          type="checkbox" 
          value="option4" 
          onChange={(e) => {
            e.target.nextSibling.style.color = e.target.checked ? 'rgba(1, 129, 140, 1)' : 'inherit';
          }}
        />
        <span> Checkbox Option 4</span>
      </label>
    </div>
    <div className="d-flex justify-content-center pt-3 mt-5">
      <input 
        className='btn btn-lg btn-primary text-white border-0'
        type="submit" 
        value="Submit" 
        style={{ 
          backgroundColor: 'rgba(1, 129, 140, 1)',
          marginTop: '10px'
        }}
      />
    </div>
    </form>
          </div>
        

         

         
         
        </div>
        
      </div>






      {/* section -II */}
      <div className='container-fluid mt-5'>
        <div className='row justify-content-center'>
        <h4 className='mt-5 mb-5 text-center' style={{ color: 'rgba(1, 129, 140, 1)' }}>
              SECTION II [20 POINTS]
            </h4>
            </div>
            </div>

            <Section2 />

        
        

        {/* section-3 */}
        <div className='container-fluid mt-5'>
        <div className='row justify-content-center'>
        <h4 className='mt-5 mb-5 text-center' style={{ color: 'rgba(1, 129, 140, 1)' }}>
              SECTION III [15 POINTS]
            </h4>
            <Section3/>

            <Footer/>
             

        </div>
        </div>

    </>
  )
}

export default App  
