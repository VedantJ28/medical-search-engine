import React from 'react'
import {Footer} from "../components/Other/footer/Footer"
import {Hero} from "../components/Other/Hero"
import {Nav_Adm} from "../components/Other/navbar/Nav_Adm"

export const Home = () => {
  return (
    <>  
        <Nav_Adm/>
        <Hero/>
        <Footer/>
    </>
  )
}
