import React from 'react'
import './box.css'
import { Link, Navigate } from 'react-router-dom'
export const Box = ({props}) => {
  const {
    name , dayPost , image , role
  } = props;

  const handleClick = (e)=>{
    // e.preventDefault();
    
  }
  return (
    <div className='item'>
        <div className='img__box'>
            <img src={image} alt=''></img>
        </div>
        <div className='user__infor'>
            <p>Họ tên : {name}</p>
            <p>Chức vụ: {role}</p>
            <p>Ngày đăng : {dayPost}</p>
        </div>
            <button className='btn-test'>
                <Link to="/create-avata" onClick={handleClick}>Lấy mẫu</Link>
            </button>
    </div>
  )
}
