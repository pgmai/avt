import React from 'react'
import "../styles/home.css"
import { Box } from '../components/Box/Box'
import data from '../data/User.json'
const Home = () => {
  return (
    <div className='container'>
        {data.map(user => <Box props={user}/>)}
    </div>
  )
}

export default Home