import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer";
import Package from "./pages/Package/Package";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/Contact/ContactUs";
import ServiceDetail from "./pages/Services/components/ServiceDetail";
import PageTransition from "./components/PageTransition";
import { useState } from "react";
import FloatButton from "./components/FloatButton";
import FormPopup from "./components/FormPopup";
import BlogDetails from "./pages/Blog/BlogDetails";
import Blog from "./pages/Blog/Blog";
import ErrorPage from "./pages/ErrorPage";
import { blogItems } from "./utils/Constant";

function App() {
  const [showForm, setShowForm] = useState(true); // Show the form by default

  const toggleForm = () => {
    setShowForm(false); // Close the form when the user submits or closes it
  };

  return (
    <>
      {showForm ? (
        <FormPopup onClose={toggleForm} /> // Show the form popup
      ) : (
        <>
          <Navbar formVis={() => setShowForm(true)} />
          <div className="max-w-full overflow-hidden bg-black">
            <FloatButton />
            <ScrollToTop />

            <PageTransition>
              <Routes>
                <Route path="/" element={<Home toggleForm={() => setShowForm(true)} />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route
                  path="/packages"
                  element={<Package toggleForm={() => setShowForm(true)} />}
                />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/blog" element={<Blog blogItems={blogItems} />} />
                <Route
                  path="/blog/:id"
                  element={<BlogDetails blogItems={blogItems} />}
                />
                <Route path="/service/:id" element={<ServiceDetail />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </PageTransition>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;