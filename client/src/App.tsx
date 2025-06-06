import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { addBlogsItems } from "./redux/slices/BlogSlice"; // Adjust the path as per your project structure

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Package from "./pages/Package/Package";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/Contact/ContactUs";
import ServiceDetail from "./pages/Services/components/ServiceDetail";
import PageTransition from "./components/PageTransition";
import FloatButton from "./components/FloatButton";
import FormPopup from "./components/FormPopup";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import ErrorPage from "./pages/ErrorPage";
import { useAppDispatch } from "./redux/hook";
import Service from "./pages/Service/Service";

function App() {
  const dispatch = useAppDispatch();

  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle open/close
  };

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/d23e4b1e-d168-4a31-9e03-33232ef2f52a")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addBlogsItems(data.reverse())); // 🔁 Latest first
      });
  }, [dispatch]);

  return (
    <>
    <Navbar formVis={toggleForm} />
      <div className="max-w-full overflow-hidden bg-black">
        {showForm && <FormPopup onClose={toggleForm} />}
        <FloatButton />
        <ScrollToTop />

        <PageTransition>
          <Routes>
            <Route path="/" element={<Home toggleForm={toggleForm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/packages" element={<Package toggleForm={toggleForm} />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </PageTransition>

        <Footer />
      </div>
    </>
  );
}

export default App;
