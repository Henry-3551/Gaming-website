import React from 'react'
import Thero from './Thero'
import Corevalues from './Corevalues'
import MissionVision from './MissionVision'
import HighlightsSection from './HighlightsSection'
import Footer from './Footer'

function Company() {
  return (
    <div>
      <div className='company' >
        <div className='div-codmbout'>
          <img src="/images/t-codmbout.png" alt="" /> <br />
        </div>


        <header className="t-imghead">
          <img src="/images/t-head.png" alt="" />
        </header>

      </div>
      <div className='t-text-head'>X-Treme Gaming Esports (XG) is a rising competitive esports organisation founded to discover, nuture, elevate and showcase 
        <span>gaming talent in Nigeria and beyond</span> </div>

        <div className="m-t-hero"><Thero/></div>

        <div className='under-hero-texts'>
          <span> ESPORT IS NOT A NEW TECHNOLOGY OR </span>
          <span> A NEW FAD. IT A FULL-BLOWN SHIFT IN ENTERTAINMENT</span>
          <span>AND CULTURE</span>
        </div>
<br /><br />
        <div><Corevalues/></div>
        <div><MissionVision/></div>
        <div><HighlightsSection/></div> <br /><br /><br /> <br /> <br /> <br /><br />
        <div><Footer/></div>


    </div>
  )
}

export default Company