import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './components/context'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Speaker from './pages/Speaker'
import Headphone from './pages/Headphone'
import Details from './pages/Details'
import Earphone from './pages/Earphone'
import Checkout from './pages/Checkout'

function App() {
  const data = useGlobalContext()
  console.log(data)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/headphones' element={<Headphone />} />
          <Route path='/speakers' element={<Speaker />} />
          <Route path='/earphones' element={<Earphone />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/product-details' element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
