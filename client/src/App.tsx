import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = { <About/> } />
      </Routes>
    </>
  )
}

export default App
