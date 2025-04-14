import React, { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  gifSrc: string;
  staticSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  gifSrc,
  staticSrc,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full md:w-1/2 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-black text-white p-6 rounded-lg h-full text-center shadow-lg">
        <div className="p-4  rounded  flex items-center justify-center">
          <img
            src={isHovered ? gifSrc : staticSrc}
            alt={title}
            className="h-72 object-contain"
          />
        </div>
        <h2 className="text-xl md:text-4xl font-bold text-left mb-2 uppercase">
          {title}
        </h2>
        <p className="text-sm md:text-base text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
