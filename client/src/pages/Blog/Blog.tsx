import Heading from "@/components/Heading";
import PageTitle from "@/components/PageTitle";
import { motion } from "framer-motion";
import { BlogGallery } from "./BlogCard";
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
        <BlogGallery visibleItems={blogItems.map(blog => ({
          id: String(blog.id),
          title: blog.title,
          image: blog.image || '',
          description: blog.description || '',
          date: blog.date || '',
          author: blog.author || '',
          tags: blog.tag || [],
          likes: blog.likes || 0,
          comments: Array.isArray(blog.comments) ? blog.comments.length : 0,
          shares: blog.shares || 0
        }))} />
      
      </motion.div>
    </div>
  );
};

export default Blog;
