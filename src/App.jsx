import { useState } from 'react'
import './App.css'
import Pestanha from './assets/components/Pestanha/Pestanha'

function App() {
  const [message, setMessage] = useState([
    {
      content : "Is a nice day"
    },
    {
      content : "Not a bad day"
    },
    {
      content : "Its a bad day"
    },
  ])

  return (
    <>
      <div className="App">
        <Pestanha message={message}	/>
      </div>
    </>
  )
}

export default App
