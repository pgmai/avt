import React from 'react'
import '../styles/create-avata.css'
import { Link } from 'react-router-dom'
const Frame = () => {
  return (
    <div className='container__avata'>
        <div className='img__box'>
            <Link to='/home/custem'>
              {/* <canvas></canvas> */}
              <img src="./logo.png" alt="" srcset="" />
            </Link>
        </div>
       <div className='container__input'>
            <label>Chọn farme</label>
            <input type='file' placeholder='Chọn farme' name='farme' id='upload-farme'/>
            <button className='btn-success'>Hoàn thành</button>
       </div>
    </div>
  )
}

export default Frame