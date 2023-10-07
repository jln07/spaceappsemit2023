import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to [GreenHaus]</h2>
      <p>[GreenHaus] helps you explore factors impacting climate change in your area, and take action to help preserve your environment.</p>
      <ul>
        <li>Learn about NASA's EMIT mission to improve climate models and measure greenhouse gases</li>
        <li>Learn about missions by other space agencies around the world investigating Earth's climate</li>
        <li>Explore your local climate including greenhouse gas sources and air quality</li>
        <li>EcoHacks</li>
        <li>Advocacy</li>
      </ul>
      <hr />
      <h2>What is EMIT?</h2>
      <p>The EMIT instrument is a NASA-developed imaging spectrometer used in space missions. It measures light in visible and infrared wavelengths to determine the mineral composition of surfaces. By capturing over 100,000 spectra per second, it creates detailed maps of Earth's mineral composition.      </p>
        <img src={".src/assets/EMIT_itself.png"}>
    </>
  )
}

export default App

//comment