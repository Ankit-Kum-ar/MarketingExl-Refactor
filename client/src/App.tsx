import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Services from "./pages/Services/Services"
import Footer from "./components/Footer"
import Package from "./pages/Package/Package"
import ServiceDetail from "./pages/Services/components/ServiceDetail"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = { <About/> } />
        <Route path="/services" element = { <Services /> } />
        <Route path="/packages" element = {<Package />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
