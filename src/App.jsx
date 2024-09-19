import './App.css'
import CountryList from './component/CountryList'
import { Route, Routes } from 'react-router-dom'
import Googlecloud from './component/Googlecloud'
import InfiniteScrollPagination from './component/InfiniteScrollingPagination'

function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Googlecloud />} />
        <Route path="/country" element={<CountryList />} />
        <Route path="/scrolling" element={<InfiniteScrollPagination />} />
      </Routes>
    
    
    </>
  )
}

export default App
