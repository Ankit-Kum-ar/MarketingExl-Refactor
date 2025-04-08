import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function BlogGallery({ visibleItems = [] }) {




  if (!visibleItems || visibleItems.length === 0) {
    return <p className="text-center text-gray-500">No blog items available.</p>;
  }

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleItems.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/blog/${item.id}`)}
          className="cursor-pointer bg-[#1a1a1a] rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#FC7901] opacity-20 translate-y-[-100%] hover:translate-y-0 transition-all duration-700 ease-in-out"></div>
          </div>

          <div className="flex pl-4 pt-4 items-center space-x-4 text-white text-sm">
            <div className="flex items-center hover:text-[#FC7901] space-x-1">
              <Heart size={16} />
              <span>{item.likes}</span>
            </div>
            <div className="flex items-center hover:text-[#FC7901] space-x-1">
              <MessageCircle size={16} />
              <span>{item.comments}</span>
            </div>
            <div className="flex items-center hover:text-[#FC7901] space-x-1">
              <Share2 size={16} />
              <span>{item.shares}</span>
            </div>
          </div>

          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold text-[#FC7901] mb-1">{item.title}</h2>
            <p className="text-white text-sm line-clamp-2 mb-3">{item.description}</p>
            <p className="text-xs text-gray-200 mb-1">
              {item.date} / <span className="font-medium">{item.author}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
