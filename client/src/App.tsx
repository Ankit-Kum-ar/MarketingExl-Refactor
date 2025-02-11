import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Services from "./pages/Services/Services"
import Footer from "./components/Footer"
import Package from "./pages/Package/Package"
import ScrollToTop from "./components/ScrollToTop"
import ContactUs from "./pages/Contact/ContactUs"
import ServiceDetail from "./pages/Services/components/ServiceDetail"
import Blog from "./pages/Blog/Blog"
import PageTransition from "./components/PageTransition"
function App() {

  return (
    <>
      <Navbar />
      
      <ScrollToTop />
      
      <PageTransition>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = { <About/> } />
          <Route path="/services" element = { <Services /> } />
          <Route path="/packages" element = {<Package />} />
          <Route path="/contact" element ={<ContactUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </PageTransition>
      
      <Footer />
    </>
  )
}

export default App
