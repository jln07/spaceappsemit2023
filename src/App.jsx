import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to (Appname) </h2>
      <p>Green Haus helps you explore factors impacting climate change in your area, and take action to help preserve your environment.</p>
      <ul>
    
          <h3/>Learn about NASA's EMIT mission to improve climate models and measure greenhouse gases
        The EMIT instrument is a NASA-developed imaging spectrometer used in space missions. It measures light in visible and infrared wavelengths to determine the mineral composition of surfaces. By capturing over 100,000 spectra per second, it creates detailed maps of Earth's mineral composition.
      <h3/>
      <img id="EMIT" src="./src/assets/EMIT IRL.png"></img>
      <img id="EMIT" src="./src/assets/EMIT itself.png"></img>

        <h2>Here is a worldview of YOUR HOME. Compare climate trends throughout the past year.</h2>


        <li>Explore your local climate including greenhouse gas sources, air quality, [EPA stuff?]</li>
        
        <li>EcoHacks</li>

        <li>Advocacy</li>
      </ul>
      <hr />
      <h2>What is EMIT?</h2>
      <p></p>
      <iframe src="https://earth.jpl.nasa.gov/emit-mmgis-lb/?s=tw5xp/"></iframe>
    </>
  )
}

export default App

//comment