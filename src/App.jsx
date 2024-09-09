import './App.css'
import CountryList from './component/CountryList'
import { Route, Routes } from 'react-router-dom'
import Googlecloud from './component/Googlecloud'

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/google" element={<Googlecloud />} />
      </Routes>
    
    
    </>
  )
}

export default App
