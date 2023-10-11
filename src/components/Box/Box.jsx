import React from 'react'
import './box.css'
import { Link, Navigate } from 'react-router-dom'
export const Box = () => {
  return (
    <div className='item'>
        <div className='img__box'>
            <img src='logo.png' alt=''></img>
        </div>
        <div className='user__infor'>
            <p>Họ tên : Đặng Ngọc Anh</p>
            <p>Chức vụ: Sinh viên</p>
            <p>Ngày đăng : 11/10/2023</p>
        </div>
            <button className='btn-test' >
                <Link to="/create-avata/">Lấy mẫu</Link>
            </button>
    </div>
  )
}
