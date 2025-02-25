import { Route, Routes, useLocation } from "react-router-dom"
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
import { useEffect, useState } from "react"
import { initGA, logPageView } from "./utils/analytics"
import FloatButton from "./components/FloatButton"
import FormPopup from "./components/FormPopup"
function App() {
  const location = useLocation();

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  useEffect(() => {
    // Initialize GA only once, when the component mounts
    initGA();
  }, []);

  useEffect(() => {
    // Log page view on route change
    logPageView(location.pathname);
  }, [location]);


  return (
    <>
    {showForm?<FormPopup onClose={toggleForm} />:null}
      <Navbar formVis={toggleForm} />
      <FloatButton />
      <ScrollToTop />
      
      <PageTransition>
        <Routes>
          
          <Route path="/" element = {<Home toggleForm={toggleForm}  />} />
          <Route path="/about" element = { <About/> } />
          <Route path="/services" element = { <Services /> } />
          <Route path="/packages" element = {<Package toggleForm={toggleForm}/>} />
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
