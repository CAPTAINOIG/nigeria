import './App.css'
import CountryList from './component/CountryList'
import { Route, Routes } from 'react-router-dom'
import Googlecloud from './component/Googlecloud'

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/country" element={<CountryList />} />
        <Route path="/" element={<Googlecloud />} />
      </Routes>
    
    
    </>
  )
}

export default App
