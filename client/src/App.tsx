import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Services from "./pages/Services/Services"
<<<<<<< HEAD
import Footer from "./components/Footer"
=======
import Package from "./pages/Package/Package"
>>>>>>> ddf140ea7bf096432d19ec36f56fd5dbd937010c
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = { <About/> } />
        <Route path="/services" element = { <Services /> } />
        <Route path="/packages" element = {<Package />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
