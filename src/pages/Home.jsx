import React from 'react'
import Footer from '../layouts/Footer'
import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - EventCraftHub - Your Ultimate Event Management Destination</title>
      </Helmet>
      Home
      <Footer/>
    </div>
  )
}
