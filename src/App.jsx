import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to [AppName]</h2>
      <p>[AppName] helps you explore factors impacting climate change in your area, and take action to help preserve your environment.</p>
      <ul>
        <li>Learn about NASA's EMIT mission to improve climate models and measure greenhouse gases</li>
        <li>Learn about missions by other space agencies around the world investigating Earth's climate</li>
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