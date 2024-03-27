
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Challenge from './pages/challenge/Challenge'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'
import Donate from './pages/donate/Donate'


const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
  )
}

export default App
