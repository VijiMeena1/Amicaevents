import React from 'react'
import Footer from '../layouts/Footer'
import { Helmet } from 'react-helmet-async'
import Carousels from '../components/Carousels'
import Contactus from '../components/Contactus'
import Callus from '../components/Callus'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - EventCraftHub - Your Ultimate Event Management Destination</title>
      </Helmet>
      <Carousels/>
      <Callus/>
      <Contactus/>
      <Footer/>
    </div>
  )
}
