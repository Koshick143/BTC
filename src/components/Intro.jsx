import React from 'react'
import '../styles/intro.css'
import imgA from '../assets/1.png'
import imgB from '../assets/2.png'
import imgC from '../assets/3.png'
import imgD from '../assets/4.png'
import imgE from '../assets/5.png'


export default function Intro() {
  return (
    <><div className="intro-cointainer">
        <div className="intro-left">
            <h1>BOOBS OF BITCOIN</h1>
            <p>is a PFP Collection of 10k Generative <span className='intro-gold'> BOOBs. </span>It is the<span className='intro-gold'> Exclusive </span> PFP Edition of BOB Market that acts as a way Governance of the platform and a Badge for Hardcore <span className='intro-gold'> BOOBs </span>Lovers and BOB Market Supporters to keep. It will employ a Hybrid Governance Structure where BOB Collection Holders and Future Token holders vote to make decisions in the Ecosystem.</p>
        </div>
        <div className="intro-right">
          <div className="imgbox-a">
            <img className='boobies-img' id='img-l-t' src={imgA} alt="" />
            <img className='boobies-img' id='img-l-b' src={imgB} alt="" />
          </div>
          <div className="imgbox-b">
            <img className='boobies-img' id='img-r-t' src={imgC} alt="" />
            <img className='boobies-img' id='img-r-m' src={imgD} alt="" />
            <img className='boobies-img' id='img-r-b' src={imgE} alt="" />
          </div>
        </div>
        </div></>
  )
}
