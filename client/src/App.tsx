import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Services from "./pages/Services/Services"
import Package from "./pages/Package/Package"
import ScrollToTop from "./components/ScrollToTop"
import PageTransition from "./components/PageTransition"
import ContactUs from "./pages/Contact/ContactUs"
function App() {

  return (
    <>
      <PageTransition />
      <Navbar />
      
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = { <About/> } />
        <Route path="/services" element = { <Services /> } />
        <Route path="/packages" element = {<Package />} />
        <Route path="/contact" element ={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
