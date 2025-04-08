import Heading from "@/components/Heading";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import { BlogGallery } from "./BlogCard";
import { Route } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import { useAppSelector } from "@/redux/hook";



const Blog = () => {
    const blogItems = useAppSelector((state) => state.blogs.blogs); // 👈 ".blogs" is inside blogSlice
   
  
  return (
    <div className="flex flex-col max-w-full overflow-hidden items-center justify-center bg-black min-h-screen">
      {/* Page Title */}
      <PageTitle title="Our Blog - Marketing EXL" />
      <Heading title="Our Blogs" />

      {/* Blog Gallery */}
      <motion.div className="bg-black w-[90%] md:w-[80%] flex flex-col items-center justify-center py-16 px-5">
        <BlogGallery visibleItems={blogItems} />
      
      </motion.div>
    </div>
  );
};

export default Blog;
