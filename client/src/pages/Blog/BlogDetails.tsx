import { useParams } from "react-router-dom";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { BlogGallery } from "./BlogCard";

interface BlogItem {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}

interface BlogDetailsProps {
  blogItems: BlogItem[];
}

const BlogDetails = ({ blogItems }: BlogDetailsProps) => {
  const { id } = useParams();
  const blogId = id ? parseInt(id) : null;
  const blog = blogId !== null ? blogItems.find((item) => item.id === blogId) : undefined; // Find the blog by ID
  const relatedBlogs = blogId !== null
    ? blogItems
        .filter((item) => item.id !== blogId)
        .map((item) => ({ ...item, id: item.id.toString() })) // Convert id to string
    : []; // Filter out the current blog

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white p-8 md:p-16 flex items-center justify-center">
        <p className="text-xl text-gray-300">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  bg-black text-white p-8 md:p-16">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-xl object-cover h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </div>
  
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-[#FC7901]">{blog.title}</h1>
          <p className="text-gray-300 text-sm md:text-base">
            {blog.date} / <span className="font-medium">{blog.author}</span>
          </p>
          <p className="text-gray-200 text-lg md:text-xl">{blog.description}</p>
  
          {/* Social Icons */}
          <div className="flex space-x-6 pt-4">
            <div className="flex items-center space-x-2 hover:text-[#FC7901]">
              <Heart size={20} />
              <span>{blog.likes}</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#FC7901]">
              <MessageCircle size={20} />
              <span>{blog.comments}</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-[#FC7901]">
              <Share2 size={20} />
              <span>{blog.shares}</span>
            </div>
          </div>
        </div>
      </div>
  
      {/* Related Blogs Section */}
      <div className="mt-16 w-full mx-auto bg-black py-16 px-5">
        <h2 className="text-2xl font-bold text-[#FC7901] mb-6 text-center">
          Related Blogs
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          <BlogGallery visibleItems={relatedBlogs} />
        </div>
      </div>
    </div>
  );
  
};

export default BlogDetails;
