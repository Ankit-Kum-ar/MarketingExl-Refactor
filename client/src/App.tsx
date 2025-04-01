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
function App() {
  // const location = useLocation();

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const blogItems = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-vector/internet-business-seo-strategy_23-2147494779.jpg",
      title: "Mastering SEO Strategies for 2025",
      date: "Mar 28, 2025",
      author: "By Marketing EXL",
      description:
        "SEO has evolved significantly, and staying ahead is crucial for businesses aiming to dominate search rankings in 2025. This blog dives deep into advanced SEO strategies like keyword research focusing on user intent, voice search optimization, and ethical link-building. We also discuss mobile-first indexing and the role of AI in reshaping search engine algorithms. By applying these techniques, you can future-proof your SEO strategy and ensure visibility in a competitive digital world. SEO will continue to evolve, so businesses must continuously improve their strategies to maintain strong online presence and stay ahead of competitors in the ever-changing digital landscape.",
      likes: 450,
      comments: 60,
      shares: 180,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-vector/ui-ux-differences-concept-illustration_114360-11700.jpg",
      title: "Top UI/UX Design Trends to Follow",
      date: "Feb 20, 2025",
      author: "By Marketing EXL",
      description:
        "Explore the latest UI/UX design trends that enhance user experience and digital interactions. The blog discusses principles like minimalism, accessibility, mobile-first designs, and intuitive interfaces. As users demand seamless experiences, it’s essential for designers to stay updated with evolving trends. This post highlights how modern design practices can make your product more user-friendly and visually engaging. By following these trends, you can create designs that not only attract users but also retain them, improving conversion rates, customer loyalty, and overall satisfaction. Stay ahead in the competitive digital world by adopting the most effective design strategies and enhancing user experiences on every platform.",
      likes: 370,
      comments: 45,
      shares: 140,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg",
      title: "Social Media Marketing Mastery",
      date: "Jan 12, 2025",
      author: "By Marketing EXL",
      description:
        "Learn effective social media marketing techniques to enhance brand awareness and engage with customers across platforms. This blog provides strategies for creating compelling content, building a strong presence, and leveraging various platform features. It covers organic growth, paid advertisements, and influencer collaborations that help businesses thrive. By mastering social media marketing, you can extend your reach, create meaningful interactions, and build long-term relationships with your audience. Whether you're looking to increase your following or improve engagement, this blog offers essential tips and insights to boost your marketing efforts, strengthen your brand's online presence, and drive business growth.",
      likes: 520,
      comments: 75,
      shares: 210,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg",
      title: "How UI/UX Enhances Conversion Rates",
      date: "Dec 15, 2024",
      author: "By Marketing EXL",
      description:
        "Discover how a well-designed UI/UX can significantly boost your conversion rates. This blog explores how optimizing the user interface and experience leads to higher engagement, better retention, and more sales. Focused on clear navigation, intuitive layouts, and seamless user journeys, the blog highlights ways to enhance customer satisfaction. By improving the design and usability of your website or app, you can ensure users stay longer, explore more, and ultimately take desired actions. A good UI/UX design plays a crucial role in turning visitors into loyal customers, which directly impacts your revenue and strengthens your brand’s position in the market.",
      likes: 430,
      comments: 55,
      shares: 160,
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-vector/digital-marketing-concept-with-online-advertising-media-symbols-flat_1284-31958.jpg",
      title: "Digital Marketing Trends to Watch",
      date: "Nov 25, 2024",
      author: "By Marketing EXL",
      description:
        "Stay ahead of the competition by embracing the latest digital marketing strategies. This blog highlights essential trends such as AI-powered marketing, content personalization, video marketing, and voice search optimization. As digital marketing evolves, businesses must adapt to new tools and methods to reach their audience effectively. From automation to interactive content, this guide offers insights into the most effective strategies for 2025. By staying updated with these trends, businesses can improve engagement, increase visibility, and ensure that their marketing efforts resonate with customers across different digital channels, ensuring sustained growth and success.",
      likes: 490,
      comments: 68,
      shares: 190,
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/free-photo/business-colleagues-together-teamwork-working-office_53876-16024.jpg",
      title: "Building Brand Trust Through Authenticity",
      date: "Oct 05, 2024",
      author: "By Marketing EXL",
      description:
        "Learn how to build brand trust through authenticity in this insightful blog. It explores the key principles of transparency, honesty, and consistent messaging, which are vital for businesses to establish credibility. Customers today value authenticity and prefer brands that align with their values. By creating an authentic brand identity and being transparent in communications, businesses can foster long-term relationships with customers. Trust is a powerful factor in customer retention and loyalty, so focusing on authenticity can strengthen your brand’s reputation and help you build a loyal customer base that will stay with you for the long run.",
      likes: 380,
      comments: 40,
      shares: 125,
    },
  ];

  return (
    <>

    <div className="max-w-full overflow-hidden bg-black">




      {showForm ? <FormPopup onClose={toggleForm} /> : null}
      <Navbar formVis={toggleForm} />
      <FloatButton />
      <ScrollToTop />

      <PageTransition>
        <Routes>
          <Route path="/" element={<Home toggleForm={toggleForm} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/packages"
            element={<Package toggleForm={toggleForm} />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog blogItems={blogItems} />} />
          <Route
            path="/blog/:id"
            element={<BlogDetails blogItems={blogItems} />}
          />
          <Route path="/service/:id" element={<ServiceDetail />} />


          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </PageTransition>

      <Footer />

      </div>
    </>
  );
}

export default App;
