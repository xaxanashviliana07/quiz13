import { useState } from 'react'
import Header from './components/Header'
import DesktopPic from "./images/image-hero-desktop.png"
import Audiophile from "./images/client-audiophile.svg"
import Databiz from "./images/client-databiz.svg"
import Maker from "./images/client-maker.svg"
import Meet from "./images/client-meet.svg"

import "./modules/App.scss"

function App() {
  

  return (
    <>
      <Header/>
      <div className='main-container'>
        <div className='article'>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes, 
          create team rituals, and watch productivity soar.</p>
          <button className='learn-more'>Learn more</button>
          <ul className='clients'>
            <li>
              <img className='client' src={Databiz}/>
            </li>
            <li>
              <img className='client' src={Audiophile}/>
            </li>
            <li>
              <img className='client' src={Meet}/>
            </li>
            <li>
              <img className='client' src={Maker}/>
            </li>
          </ul>
        </div>
        <div >
          <img className='deskimg' src={DesktopPic}/>
        </div>
      </div>
    </>
  )
}

export default App
