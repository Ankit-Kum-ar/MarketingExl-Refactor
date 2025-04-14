import React, { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  gifSrc: string;
  staticSrc: string;
  index: number;
}

const ServiceCard2: React.FC<ServiceCardProps> = ({
  title,
  description,
  gifSrc,
  staticSrc,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      } items-center gap-6 mb-12`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={isHovered ? gifSrc : staticSrc}
          alt={title}
          className="h-72 object-contain transition duration-300"
        />
      </div>
      <div className="w-full md:w-1/2 text-white px-4">
        <h2 className="text-xl md:text-4xl font-semibold mb-2">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard2;
