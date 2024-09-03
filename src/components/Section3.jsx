import React from 'react'
import image from '../assets/image.png'

export default function Section3() {
  return (
    <div className='row justify-content-center' style={{backgroundColor:'rgba(235, 247, 252, 1)', minHeight:'100vh'}}>

<p className='text-center' style={{ color: 'rgba(69, 90, 100, 1)', marginTop: '5px', marginRight: '3px',  fontSize: '111%' }}>
            Lorem ipsum dolor sit amet
            </p>


    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ height: '40%', width: '90%', maxWidth: '600px' }}>
      <div className="carousel-indicators" style={{ bottom: '-30px' }}>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(4, 57, 83, 1)' }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(91, 96, 124, 0.5)' }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(91, 96, 124, 0.5)' }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(91, 96, 124, 0.5)' }}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(91, 96, 124, 0.5)' }}></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image}className="d-block w-100" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src={image} className="d-block w-100" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src={image} className="d-block w-100" alt="Image 3" />
        </div>
        <div className="carousel-item">
          <img src={image} className="d-block w-100" alt="Image 4" />
        </div>
        <div className="carousel-item">
          <img src={image}className="d-block w-100" alt="Image 5" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ left: '-2px' }}>
        <div style={{ backgroundColor: 'rgba(4, 57, 83, 1)', borderRadius: '50%', padding: '5px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-left mx-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
          </svg>
        </div>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ right: '-2px' }}>
        <div style={{ backgroundColor: 'rgba(4, 57, 83, 1)', borderRadius: '50%', padding: '5px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-4.147-4.146a.5.5 0 1 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </div>
        <span className="visually-hidden">Next</span>

      </button>

    </div>
    <span className='d-flex justify-content-center'>
    <button className='btn btn-primary btn-lg ' style={{ background: 'rgba(4, 57, 83, 1)', color: 'white', width: '100px', height: '40px', borderRadius: '10px' }}> Slider button </button>    
    </span>
    </div>
  )
}
