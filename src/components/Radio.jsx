import React from 'react'

function Radio(props) {
  return (
    <>

<p className='text-left' style={{ color: 'rgba(69, 90, 100, 1)', marginTop: '3px', marginRight: '3px', marginBottom: '3px', fontSize: '101%' }}>
            Lorem ipsum dolor sit amet
            </p>
            <div className='d-flex flex-column align-items-start mt-1 me-1 mb-1'>
              <label className='p-1 ' style={{ paddingLeft: '1px' }}>
                <input type="radio" name="option" value="option1" onChange={(e) => {
                  document.querySelectorAll('label').forEach(label => label.style.color = '');
                  e.target.parentElement.style.color = 'rgba(69, 90, 100, 1)';
                }} />
                Radio Button Option
              </label>
              <label className='p-1' style={{ paddingLeft: '1px' }}>
                <input type="radio" name="option" value="option2" onChange={(e) => {
                  document.querySelectorAll('label').forEach(label => label.style.color = '');
                  e.target.parentElement.style.color = 'rgba(69, 90, 100, 1)';
                }} />
                Radio Button Option
              </label>
              <label className='p-1' style={{ paddingLeft: '1px' }}>
                <input type="radio" name="option" value="option3" onChange={(e) => {
                  document.querySelectorAll('label').forEach(label => label.style.color = '');
                  e.target.parentElement.style.color = 'rgba(69, 90, 100, 1)';
                }} />
                Radio Button Option
              </label>
              <label className='p-1' style={{ paddingLeft: '1px' }}>
                <input type="radio" name="option" value="option4" onChange={(e) => {
                  document.querySelectorAll('label').forEach(label => label.style.color = '');
                  e.target.parentElement.style.color = 'rgba(69, 90, 100, 1)';
                }} />
                Radio Button Option
              </label>

            </div>
    </>
  )
}

export default Radio