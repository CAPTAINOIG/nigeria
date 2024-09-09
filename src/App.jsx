import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountryList from './component/CountryList'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Routes>
        <Route path="/" element={<CountryList />} />
        {/* Add more routes as needed */}
      </Routes>
    
    
    </>
  )
}

export default App
