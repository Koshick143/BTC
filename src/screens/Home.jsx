import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Tokenomic from '../components/Tokenomic'
import Milk from '../components/Milk'
import Casarol from '../components/Casarol'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Casarol/>
    <Tokenomic/>
    <Milk/>
    <Footer/>
    </>
  )
}
