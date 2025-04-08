import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { addBlogsItems } from "./redux/slices/BlogSlice"; // Adjust the path as per your project structure

=======
>>>>>>> 3a7e0ecca5f07246720cbfb7969eb4d641ebf7be
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
<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> 3a7e0ecca5f07246720cbfb7969eb4d641ebf7be
import FloatButton from "./components/FloatButton";
import FormPopup from "./components/FormPopup";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import ErrorPage from "./pages/ErrorPage";
<<<<<<< HEAD
import { useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  
  const [showForm, setShowForm] = useState(false);
  
=======
import { blogItems } from "./utils/Constant";

function App() {
  const [showForm, setShowForm] = useState(true); // Show the form by default

>>>>>>> 3a7e0ecca5f07246720cbfb7969eb4d641ebf7be
  const toggleForm = () => {
    setShowForm(false); // Close the form when the user submits or closes it
  };
  
  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/d23e4b1e-d168-4a31-9e03-33232ef2f52a")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addBlogsItems(data.reverse())); // 🔁 Latest pehle
      });
  }, [dispatch]);
  
  



<<<<<<< HEAD

  return (
    <>
      <div className="max-w-full overflow-hidden bg-black">
        {showForm && <FormPopup onClose={toggleForm} />}
        <Navbar formVis={toggleForm} />
        <FloatButton />
        <ScrollToTop />

        <PageTransition>
          <Routes>
            <Route path="/" element={<Home toggleForm={toggleForm} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
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
=======
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
>>>>>>> 3a7e0ecca5f07246720cbfb7969eb4d641ebf7be
    </>
  );
}

export default App;