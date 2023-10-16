import React from 'react'
import './custem-input.css'
const CustemInput = ({type , name , id , className , placeholder }) => {
  return (
    <div className='input__box'>
        <input 
            type={type} 
            name={name}  
            id={id} 
            className={`form-control ${className}`} 
            placeholder={placeholder}
            required
            />
    </div>

  )
}

export default CustemInput