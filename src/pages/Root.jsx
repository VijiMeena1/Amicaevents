import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

export default function Root() {
  return (
    <div className='mx-auto'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
