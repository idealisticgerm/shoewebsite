import React from 'react'
import Navbar from './components/Navigation/Navbar'
// import Hero from './components/hero/Hero'
import Home from './components/pages/Home'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='w-full '>
      <Navbar />
      {/* <Hero /> */}
      <Home />

      <Footer />
    </div>
  )
}

export default App