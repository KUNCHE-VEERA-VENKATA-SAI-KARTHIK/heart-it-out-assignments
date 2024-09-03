import React from 'react'

export default function Check() {
  return (
    <>
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


    </>
  )
}
